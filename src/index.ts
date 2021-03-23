import HamEmails from './in-memory/ham-emails';
import SpamEmails from './in-memory/spam-emails';
import EmailLetter from './email-letter';
import { Word } from './word';
import EmailClassifier from './classifier/email-classifier';

const alpha = 1;

const hamEmails = new HamEmails().getEmails();
const spamEmails = new SpamEmails().getEmails();

const hamWordsArray = hamEmails.flatMap((email: EmailLetter) => email.words());
const hamWords: Record<string, number> = {};
let hamWordsCount = 0;
hamWordsArray.reduce((words: Record<string, number>, word: Word) => {
  if (!words[word]) {
    words[word] = 1;
    words[word] += alpha;
    hamWordsCount += alpha;
  } else {
    words[word]++;
  }
  hamWordsCount++;
  return words;
}, hamWords);
const emailIsHamGuess = hamEmails.length / (hamEmails.length + spamEmails.length);
const wordIsHamDataset: Record<string, number> = {};
Object.entries(hamWords).reduce((words: Record<string, number>, word: [string, number]) => {
  const literal = word[0];
  const occurrences = word[1];
  words[literal] = occurrences / hamWordsCount;
  return words;
}, wordIsHamDataset);


const spamWordsArray = spamEmails.flatMap((email: EmailLetter) => email.words());
const spamWords: Record<string, number> = {};
let spamWordsCount = 0;
spamWordsArray.reduce((words: Record<string, number>, word: Word) => {
  if (!words[word]) {
    words[word] = 1;
    words[word] += alpha;
    spamWordsCount += alpha;
  } else {
    words[word]++;
  }
  spamWordsCount++;
  return words;
}, spamWords);
const emailIsSpamGuess = spamEmails.length / (hamEmails.length + spamEmails.length);
const wordIsSpamDataset: Record<string, number> = {};
Object.entries(spamWords).reduce((words: Record<string, number>, word: [string, number]) => {
  const literal = word[0];
  const occurrences = word[1];
  words[literal] = occurrences / spamWordsCount;
  return words;
}, wordIsSpamDataset);


const email = new EmailLetter('[zzzzteana] Re: Australian Catholic Kiddie Perv Steps Aside',
'There is a bit of circumstantial evidence - apparently some MT \n' +
  'listers were approached by him (via email) - a little research in \n' +
  'dejanews/google groups showed a number of messages from him, clearly \n' +
  'hoping to contact girls, appearing in "alt.teens" and similar groups -\n' +
  ' I just tried a Google Groups search on "Robert Moaby" and some of \n' +
  'them came top of the list.\n' +
  'Note for Marie - "MT" stands for Mark Thomas, a slightly slimmer, UK \n' +
  'version of your Michael Moore - the mailing list is named after him. \n' +
  'Rob');
const emailWordsArray = email.words();
const emailWords: Record<string, number> = {};
emailWordsArray.reduce((words: Record<string, number>, word: Word) => {
  if (!words[word]) {
    words[word] = 1;
  } else {
    words[word]++;
  }
  return words;
}, emailWords);
const newEmailIsHamGuess = Object.entries(emailWords).reduce((probability: number, word: [string, number]) => {
  const literal = word[0];
  let hamProbability = wordIsHamDataset[literal];
  if (!hamProbability) {
    const occurrences = word[1];
    hamProbability = occurrences / (hamWordsCount + 1);
  }
  return probability * hamProbability;
}, emailIsHamGuess);
const newEmailIsSpamGuess = Object.entries(emailWords).reduce((probability: number, word: [string, number]) => {
  const literal = word[0];
  let spamProbability = wordIsSpamDataset[literal];
  if (!spamProbability) {
    const occurrences = word[1];
    spamProbability = occurrences / (spamWordsCount + 1);
  }
  return probability * spamProbability;
}, emailIsSpamGuess);

new EmailClassifier(new HamEmails(), new SpamEmails(), alpha)
  .test(email);
