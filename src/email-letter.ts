import { Word } from './word';
import { EmailHeaders } from './email-headers';

/**
 * Basic structure of an email letter.
 *
 * <p>Contains subject needed to reference or find the letter
 *
 * <p>Email body contains text of the letter.
 */
export default class EmailLetter {

  /**
   * Constants needed to extract words from the `body`.
   */
  private static readonly NON_WORD_CHARACTERS = /['"`,!?.\n()\[\]{}\-:<>*&^%$#@+=~|\\/]/g;
  private static readonly MULTIPLE_SPACES = /[ ]{2,}/g;
  private static readonly EMPTY_STRING = '';
  private static readonly SPACE = ' ';

  private readonly subject: string;
  private readonly body: string;

  /**
   * Creates a new email letter with a given subject and text.
   *
   * @param {string} subject email subject
   * @param {string} body email body
   */
  public constructor(subject: string, body: string) {
    this.subject = subject;
    this.body = body;
  }

  /**
   * Extracts words from the `body`.
   */
  public words(): Array<Word> {
    return this.extractWordsFromBody()
      .map((word) => ({
        value: word,
      }));
  }

  /**
   * Extracts words from the email `body`, providing the words in a lower-case.
   *
   * <p>Removes everything that isn't a word.
   *
   * <p>Since every non-word character is removed,
   * all short versions of words are retrieved incorrectly, as follows:
   * `it'll` -> `itll`.
   *
   * @return {Array<string>} extracted words
   * @private
   */
  private extractWordsFromBody(): Array<string> {
    return this
      .body
      .replaceAll(EmailLetter.NON_WORD_CHARACTERS, EmailLetter.EMPTY_STRING)
      .replaceAll(EmailLetter.MULTIPLE_SPACES, EmailLetter.SPACE)
      .split(EmailLetter.SPACE)
      .map((word: string) => word.toLowerCase());
  }

  /**
   * Creates a new email letter based on the provided headers.
   *
   * @param {EmailHeaders} headers email headers that make up an email letter
   */
  public static from(headers: EmailHeaders) {
    return new EmailLetter(headers.subject, headers.body);
  }
}
