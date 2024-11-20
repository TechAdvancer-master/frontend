#!/bin/bash

# Check if a path is provided
if [ -z "$1" ]; then
    echo "Usage: $0 <path-to-directory>"
    exit 1
fi

# Get the provided path
DIR_PATH=$1

# Check if the path exists and is a directory
if [ ! -d "$DIR_PATH" ]; then
    echo "Error: $DIR_PATH is not a valid directory."
    exit 1
fi

# Output file path (created inside the provided directory)
OUTPUT_FILE="$DIR_PATH/output.txt"

# Clear or create the output file
> "$OUTPUT_FILE"

# Loop through all files in the directory recursively
find "$DIR_PATH" -type f | while read -r FILE; do
    echo "#$(basename "$FILE")" >> "$OUTPUT_FILE"
    cat "$FILE" >> "$OUTPUT_FILE"
    echo -e "\n" >> "$OUTPUT_FILE"  
done

echo "All file contents have been written to $OUTPUT_FILE

