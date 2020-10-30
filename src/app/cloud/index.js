exports.analyzeSentimentOfText = async function analyzeSentimentOfText(text) {
  // [START language_sentiment_text]
  const language = require('@google-cloud/language');
  const client = new language.LanguageServiceClient();

  const document = {
    content: text,
    type: 'PLAIN_TEXT',
  };
  const [result] = await client.analyzeSentiment({document});

  const sentiment = result.documentSentiment;
  console.log('Document sentiment:');
  console.log(`  Score: ${sentiment.score}`);
  console.log(`  Magnitude: ${sentiment.magnitude}`);

  const sentences = result.sentences;
  sentences.forEach(sentence => {
    console.log(`Sentence: ${sentence.text.content}`);
    console.log(`  Score: ${sentence.sentiment.score}`);
    console.log(`  Magnitude: ${sentence.sentiment.magnitude}`);

  });
  
  return [sentiment, sentences];
  // [END language_sentiment_text]
}

exports.analyzeSentimentInFile = async function analyzeSentimentInFile(bucketName, fileName) {
  // [START language_sentiment_gcs]
  // Imports the Google Cloud client library
  const language = require('@google-cloud/language');

  // Creates a client
  const client = new language.LanguageServiceClient();

  /**
   * TODO(developer): Uncomment the following lines to run this code
   */
  // const bucketName = 'Your bucket name, e.g. my-bucket';
  // const fileName = 'Your file name, e.g. my-file.txt';

  // Prepares a document, representing a text file in Cloud Storage
  const document = {
    gcsContentUri: `gs://${bucketName}/${fileName}`,
    type: 'PLAIN_TEXT',
  };

  // Detects the sentiment of the document
  const [result] = await client.analyzeSentiment({document});

  const sentiment = result.documentSentiment;
  console.log('Document sentiment:');
  console.log(`  Score: ${sentiment.score}`);
  console.log(`  Magnitude: ${sentiment.magnitude}`);

  const sentences = result.sentences;
  sentences.forEach(sentence => {
    console.log(`Sentence: ${sentence.text.content}`);
    console.log(`  Score: ${sentence.sentiment.score}`);
    console.log(`  Magnitude: ${sentence.sentiment.magnitude}`);
  });
  // [END language_sentiment_gcs]
}

exports.analyzeEntitiesOfText = async function analyzeEntitiesOfText(text) {
  // [START language_entities_text]
  // Imports the Google Cloud client library
  const language = require('@google-cloud/language');

  // Creates a client
  const client = new language.LanguageServiceClient();
  console.log(text)
  const document = {
    content: text,
    type: 'PLAIN_TEXT',
  };

  // Detects entities in the document
  const [result] = await client.analyzeEntities({document});

  const entities = result.entities;

  console.log('Entities:');
  entities.forEach(entity => {
    console.log(entity.name);
    console.log(` - Type: ${entity.type}, Salience (destaque no texto): ${entity.salience}`);
    if (entity.metadata && entity.metadata.wikipedia_url) {
      console.log(` - Wikipedia URL: ${entity.metadata.wikipedia_url}`);
    }
  });

  return result
  // [END language_entities_text]
}

exports.analyzeEntitiesInFile = async function analyzeEntitiesInFile(bucketName, fileName) {
  // [START language_entities_gcs]
  // Imports the Google Cloud client library
  const language = require('@google-cloud/language');

  // Creates a client
  const client = new language.LanguageServiceClient();

  /**
   * TODO(developer): Uncomment the following lines to run this code
   */
  // const bucketName = 'Your bucket name, e.g. my-bucket';
  // const fileName = 'Your file name, e.g. my-file.txt';

  // Prepares a document, representing a text file in Cloud Storage
  const document = {
    gcsContentUri: `gs://${bucketName}/${fileName}`,
    type: 'PLAIN_TEXT',
  };

  // Detects entities in the document
  const [result] = await client.analyzeEntities({document});
  const entities = result.entities;

  console.log('Entities:');
  entities.forEach(entity => {
    console.log(entity.name);
    console.log(` - Type: ${entity.type}, Salience: ${entity.salience}`);
    if (entity.metadata && entity.metadata.wikipedia_url) {
      console.log(` - Wikipedia URL: ${entity.metadata.wikipedia_url}`);
    }
  });

  // [END language_entities_gcs]
}

exports.analyzeSyntaxOfText = async function analyzeSyntaxOfText(text) {
  // [START language_syntax_text]
  // Imports the Google Cloud client library
  const language = require('@google-cloud/language');

  // Creates a client
  const client = new language.LanguageServiceClient();

  /**
   * TODO(developer): Uncomment the following line to run this code.
   */
  // const text = 'Your text to analyze, e.g. Hello, world!';

  // Prepares a document, representing the provided text
  const document = {
    content: text,
    type: 'PLAIN_TEXT',
  };

  // Need to specify an encodingType to receive word offsets
  const encodingType = 'UTF8';

  // Detects the sentiment of the document
  const [syntax] = await client.analyzeSyntax({document, encodingType});

  console.log('Tokens:');
  syntax.tokens.forEach(part => {
    console.log(`${part.partOfSpeech.tag}: ${part.text.content}`);
    console.log('Morphology:', part.partOfSpeech);
  });
  // [END language_syntax_text]
}

exports.analyzeSyntaxInFile = async function analyzeSyntaxInFile(bucketName, fileName) {
  // [START language_syntax_gcs]
  // Imports the Google Cloud client library
  const language = require('@google-cloud/language');

  // Creates a client
  const client = new language.LanguageServiceClient();

  /**
   * TODO(developer): Uncomment the following lines to run this code
   */
  // const bucketName = 'Your bucket name, e.g. my-bucket';
  // const fileName = 'Your file name, e.g. my-file.txt';

  // Prepares a document, representing a text file in Cloud Storage
  const document = {
    gcsContentUri: `gs://${bucketName}/${fileName}`,
    type: 'PLAIN_TEXT',
  };

  // Need to specify an encodingType to receive word offsets
  const encodingType = 'UTF8';

  // Detects the sentiment of the document
  const [syntax] = await client.analyzeSyntax({document, encodingType});

  console.log('Parts of speech:');
  syntax.tokens.forEach(part => {
    console.log(`${part.partOfSpeech.tag}: ${part.text.content}`);
    console.log('Morphology:', part.partOfSpeech);
  });
  // [END language_syntax_gcs]
}

exports.analyzeEntitySentimentOfText = async function analyzeEntitySentimentOfText(text) {
  // [START language_entity_sentiment_text]
  // Imports the Google Cloud client library
  const language = require('@google-cloud/language');

  // Creates a client
  const client = new language.LanguageServiceClient();

  /**
   * TODO(developer): Uncomment the following line to run this code.
   */
  // const text = 'Your text to analyze, e.g. Hello, world!';

  // Prepares a document, representing the provided text
  const document = {
    content: text,
    type: 'PLAIN_TEXT',
  };

  // Detects sentiment of entities in the document
  const [result] = await client.analyzeEntitySentiment({document});
  const entities = result.entities;

  console.log('Entities and sentiments:');
  entities.forEach(entity => {
    console.log(`  Name: ${entity.name}`);
    console.log(`  Type: ${entity.type}`);
    // const persentageScore = `${entity.sentiment.score * 100}%`;
    console.log(`  Score of sentiment (negativo/positivo): ${entity.sentiment.score}`);

    console.log(`  Magnitude (o Score sem descriminacao de negativo/positivo): ${entity.sentiment.magnitude}`);
    console.log(`------------------------------------------------------------------------------`)
  });
  // [END language_entity_sentiment_text]
}

exports.analyzeEntitySentimentInFile = async function analyzeEntitySentimentInFile(bucketName, fileName) {
  // [START language_entity_sentiment_gcs]
  // Imports the Google Cloud client library
  const language = require('@google-cloud/language');

  // Creates a client
  const client = new language.LanguageServiceClient();

  /**
   * TODO(developer): Uncomment the following lines to run this code
   */
  // const bucketName = 'Your bucket name, e.g. my-bucket';
  // const fileName = 'Your file name, e.g. my-file.txt';

  // Prepares a document, representing a text file in Cloud Storage
  const document = {
    gcsContentUri: `gs://${bucketName}/${fileName}`,
    type: 'PLAIN_TEXT',
  };

  // Detects sentiment of entities in the document
  const [result] = await client.analyzeEntitySentiment({document});
  const entities = result.entities;

  console.log('Entities and sentiments:');
  entities.forEach(entity => {
    console.log(`  Name: ${entity.name}`);
    console.log(`  Type: ${entity.type}`);
    console.log(`  Score: ${entity.sentiment.score}`);
    console.log(`  Magnitude: ${entity.sentiment.magnitude}`);
  });
  // [END language_entity_sentiment_gcs]
}

exports.classifyTextOfText = async function classifyTextOfText(text) {
  // [START language_classify_text]
  // Imports the Google Cloud client library
  const language = require('@google-cloud/language');

  // Creates a client
  const client = new language.LanguageServiceClient();

  /**
   * TODO(developer): Uncomment the following line to run this code.
   */
  // const text = 'Your text to analyze, e.g. Hello, world!';

  // Prepares a document, representing the provided text
  const document = {
    content: text,
    type: 'PLAIN_TEXT',
  };

  // Classifies text in the document
  const [classification] = await client.classifyText({document});
  // console.log('Categories:');
  // classification.categories.forEach(category => {
  //   console.log(`Name: ${category.name}, Confidence: ${category.confidence}`);
  // });
  // [END language_classify_text]
}

exports.classifyTextInFile = async function classifyTextInFile(bucketName, fileName) {
  // [START language_classify_gcs]
  // Imports the Google Cloud client library.
  const language = require('@google-cloud/language');

  // Creates a client.
  const client = new language.LanguageServiceClient();

  /**
   * TODO(developer): Uncomment the following lines to run this code
   */
  // const bucketName = 'Your bucket name, e.g. my-bucket';
  // const fileName = 'Your file name, e.g. my-file.txt';

  // Prepares a document, representing a text file in Cloud Storage
  const document = {
    gcsContentUri: `gs://${bucketName}/${fileName}`,
    type: 'PLAIN_TEXT',
  };

  // Classifies text in the document
  const [classification] = await client.classifyText({document});

  console.log('Categories:');
  classification.categories.forEach(category => {
    console.log(`Name: ${category.name}, Confidence: ${category.confidence}`);
  });
  // [END language_classify_gcs]
}
