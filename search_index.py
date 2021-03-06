import argparse
import json
from pathlib import Path

from cord_ann.mapping import load_sentence_to_article_mapping, load_metadata

from cord_ann.embeddings import EmbeddingModel
from cord_ann.index import search_args, Index, paths_from_dataset_path

if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser = search_args(parser)
    parser.add_argument('--input_path', default="sentences.txt")
    parser.add_argument('--output_path', default="search.json")
    args = parser.parse_args()
    articles_path, _, mapping_path, metadata_path = paths_from_dataset_path(args.dataset_path)

    sentences = Path(args.input_path).read_text().strip().split('\n')
    sent_article_mapping = load_sentence_to_article_mapping(mapping_path)
    metadata = load_metadata(metadata_path)

    model = EmbeddingModel(model_name_or_path=args.model_name_or_path,
                           device=args.device,
                           batch_size=args.batch_size,
                           show_progress_bar=not args.silent)

    index = Index(index_path=args.index_path,
                  index_type=args.index_type,
                  articles_path=articles_path,
                  mapping=sent_article_mapping,
                  metadata=metadata,
                  k=args.k,
                  num_workers=args.num_workers)
    search_embeddings = model.encode_sentences(sentences=sentences)
    results = index.search_index(sentences=sentences,
                                 search_embeddings=search_embeddings)
    with open(args.output_path, 'w') as f:
        json.dump(results, f)
