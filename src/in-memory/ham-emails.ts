import ham from './ham';
import { EmailHeaders } from '../email-headers';
import InMemoryEmailsProvider from './in-memory-emails-provider';

/**
 * Provides hardcoded non-spam emails from the local file.
 */
export default class HamEmails extends InMemoryEmailsProvider {
  protected source(): Array<EmailHeaders> {
    return ham;
  }
}
