function splitSentences(text) {
  // Regular expression to match sentence boundaries
  const regex = /(?<!\w\.\w.)(?<![A-Z][a-z]\.)(?<=\.|\?)\s/

  // Split the text using the regex and return the result as an array
  return text.split(regex)
}

// Example usage
const exampleText =
  'This is the first sentence. This is Mr. Smith. Is this the second sentence? Yes, it is.'
const sentences = splitSentences(exampleText)

console.log(sentences)
