import HamEmails from './in-memory/ham-emails';
import SpamEmails from './in-memory/spam-emails';
import EmailLetter from './email-letter';
import EmailClassifier from './classifier/email-classifier';
import { emailsClassification, EmailsTrainData, multinomialNaiveBayes } from './classifier/model';

const alpha = 1;

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

new EmailClassifier(new HamEmails(), new SpamEmails(), alpha)
  .test(email);

const emails: EmailsTrainData = {
  ham: new HamEmails(),
  spam: new SpamEmails(),
};

const classifiedEmail = emailsClassification()
  .withAlpha(alpha)
  .withClassifier(multinomialNaiveBayes())
  .train(emails)
  .predict(email);
console.log(classifiedEmail);
