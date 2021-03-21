import EmailLetter from './email-letter';

/**
 * Provider of email letters from some source.
 *
 * Possible sources are files, database or im-memory objects.
 */
export interface EmailsProvider {

  /**
   * Retrieves emails from the source.
   *
   * @return {Array<EmailLetter>} emails
   */
  getEmails(): Array<EmailLetter>;
}
