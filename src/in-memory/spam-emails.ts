import { EmailHeaders } from '../email-headers';
import InMemoryEmailsProvider from './in-memory-emails-provider';
import spam from './spam';

/**
 * Provides hardcoded spam emails from the local file.
 */
export default class SpamEmails extends InMemoryEmailsProvider {
  protected source(): Array<EmailHeaders> {
    return spam;
  }
}
