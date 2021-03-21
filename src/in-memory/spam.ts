import { EmailHeaders } from '../email-headers';

/**
 * 20 mocked in-memory spam emails.
 */
const spam: Array<EmailHeaders> = [
  {
    subject: '[ILUG] Guaranteed to lose 10-12 lbs in 30 days 10.206',
    body: '1) Fight The Risk of Cancer!\n' +
      'http://www.adclick.ws/p.cfm?o=315&s=pk007\n' +
      '2) Slim Down - Guaranteed to lose 10-12 lbs in 30 days\n' +
      'http://www.adclick.ws/p.cfm?o=249&s=pk007\n' +
      '3) Get the Child Support You Deserve - Free Legal Advice\n' +
      'http://www.adclick.ws/p.cfm?o=245&s=pk002\n' +
      '4) Join the Web\'s Fastest Growing Singles Community\n' +
      'http://www.adclick.ws/p.cfm?o=259&s=pk007\n' +
      '5) Start Your Private Photo Album Online!\n' +
      'http://www.adclick.ws/p.cfm?o=283&s=pk007\n' +
      'Have a Wonderful Day,\n' +
      'Offer Manager\n' +
      'PrizeMama',
  },
  {
    subject: 'Guaranteed to lose 10-12 lbs in 30 days                          11.150',
    body: '1) Fight The Risk of Cancer!\n' +
      'http://www.adclick.ws/p.cfm?o=315&s=pk007\n' +
      '2) Slim Down - Guaranteed to lose 10-12 lbs in 30 days\n' +
      'http://www.adclick.ws/p.cfm?o=249&s=pk007\n' +
      '3) Get the Child Support You Deserve - Free Legal Advice\n' +
      'http://www.adclick.ws/p.cfm?o=245&s=pk002\n' +
      '4) Join the Web\'s Fastest Growing Singles Community\n' +
      'http://www.adclick.ws/p.cfm?o=259&s=pk007\n' +
      '5) Start Your Private Photo Album Online!\n' +
      'http://www.adclick.ws/p.cfm?o=283&s=pk007\n' +
      'Have a Wonderful Day,\n' +
      'Offer Manager\n' +
      'PrizeMama',
  },
  {
    subject: 'Re: Fw: User Name & Password to Membership To 5 Sites zzzz@example.com pviqg',
    body: '##################################################\n' +
      '#                                                #\n' +
      '#                 Adult Club                     #\n' +
      '#           Offers FREE Membership               #\n' +
      '#                                                #\n' +
      '##################################################\n' +
      '>>>>>  INSTANT ACCESS TO ALL SITES NOW\n' +
      '>>>>>  Your User Name And Password is.\n' +
      '>>>>>  User Name: zzzz@example.com\n' +
      '>>>>>  Password: 760382\n' +
      '5 of the Best Adult Sites on the Internet for FREE!\n' +
      '---------------------------------------\n' +
      'NEWS 08/18/02\n' +
      'With just over 2.9 Million Members that signed up for FREE, ' +
      'Last month there were 721,184 New\n' +
      'Members. Are you one of them yet???\n' +
      '---------------------------------------\n' +
      'Our Membership FAQ\n' +
      'Q. Why are you offering free access to 5 adult membership sites for free?\n' +
      'A. I have advertisers that pay me for ad space so you don\'t have to pay for membership.\n' +
      'Q. Is it true my membership is for life?\n' +
      'A. Absolutely you\'ll never have to pay a cent the advertisers do.\n' +
      'Q. Can I give my account to my friends and family?\n' +
      'A. Yes, as long they are over the age of 18.\n' +
      'Q. Do I have to sign up for all 5 membership sites?\n' +
      'A. No just one to get access to all of them.\n' +
      'Q. How do I get started?\n' +
      'A. Click on one of the following links below to become a member.\n' +
      '- These are multi million dollar operations with policies and rules.\n' +
      '- Fill in the required info and they won\'t charge you for the Free pass!\n' +
      '- If you don\'t believe us, just read their terms and conditions.\n' +
      '---------------------------\n' +
      '# 5. > Adults Farm\n' +
      'http://80.71.66.8/farm/?aid=760382\n' +
      'Girls and Animals Getting Freaky....FREE Lifetime Membership!!\n' +
      '# 4. > Sexy Celebes\n' +
      'http://80.71.66.8/celebst/?aid=760382\n' +
      'Thousands Of XXX Celebes doing it...FREE Lifetime Membership!!\n' +
      '# 3. > Play House Porn\n' +
      'http://80.71.66.8/mega/?aid=760382\n' +
      'Live Feeds From 60 Sites And Web Cams...FREE Lifetime Membership!!\n' +
      '# 2. > Asian Sex Fantasies\n' +
      'http://80.71.66.8/asian/?aid=760382\n' +
      'Japanese Schoolgirls, Live Sex Shows ...FREE Lifetime Membership!!\n' +
      '# 1. > Lesbian Lace\n' +
      'http://80.71.66.8/lesbian/?aid=760382\n' +
      'Girls and Girls Getting Freaky! ...FREE Lifetime Membership!!\n' +
      '--------------------------\n' +
      'Jennifer Simpson, Miami, FL\n' +
      'Your FREE lifetime membership has entertained my boyffriend and I for\n' +
      'the last two years!  Your Adult Sites are the best on the net!\n' +
      'Joe Morgan Manhattan, NY\n' +
      'Your live sex shows and live sex cams are unbelievable. The best part\n' +
      'about your porn sites, is that they\'re absolutely FREE!\n' +
      '--------------------------\n' +
      'Removal Instructions:\n' +
      'You have received this advertisement because you have opted in to receive ' +
      'free adult internet\n' +
      'offers and specials through our affiliated websites. ' +
      'If you do not wish to receive further emails\n' +
      'or have received the email in error you may opt-out of our database here\n' +
      'http://80.71.66.8/optout/ . Please allow 24 hours for removal.\n' +
      'vonolmosatkirekpups',
  },
  {
    subject: '[ILUG-Social] re: Guaranteed to lose 10-12 lbs in 30 days 10.148',
    body: 'I thought you might like these:\n' +
      '1) Slim Down - Guaranteed to lose 10-12 lbs in 30 days\n' +
      'http://www.freeyankee.com/cgi/fy2/to.cgi?l=822slim1\n' +
      '2) Fight The Risk of Cancer! \n' +
      'http://www.freeyankee.com/cgi/fy2/to.cgi?l=822nic1 \n' +
      '3) Get the Child Support You Deserve - Free Legal Advice \n' +
      'http://www.freeyankee.com/cgi/fy2/to.cgi?l=822ppl1\n' +
      'Offer Manager\n' +
      'Daily-Deals',
  },
  {
    subject: 'RE: Your Bank Account Information ',
    body: 'A POWERHOUSE GIFTING PROGRAM You Don\'t Want To Miss! \n' +
      '  GET IN WITH THE FOUNDERS! \n' +
      'The MAJOR PLAYERS are on This ONE\n' +
      'For ONCE be where the PlayerS are\n' +
      'This is YOUR Private Invitation\n' +
      'EXPERTS ARE CALLING THIS THE FASTEST WAY \n' +
      'TO HUGE CASH FLOW EVER CONCEIVED\n' +
      'Leverage $1,000 into $50,000 Over and Over Again\n' +
      'THE QUESTION HERE IS:\n' +
      'YOU EITHER WANT TO BE WEALTHY \n' +
      'OR YOU DON\'T!!!\n' +
      'WHICH ONE ARE YOU?\n' +
      'I am tossing you a financial lifeline and for your sake I \n' +
      'Hope you GRAB onto it and hold on tight For the Ride of youR life!\n' +
      'Testimonials\n' +
      'Hear what average people are doing their first few days:\n' +
      '�We\'ve received 8,000 in 1 day and we are doing that over and over again!\' Q.S. in AL\n' +
      ' �I\'m a single mother in FL and I\'ve received 12,000 in the last 4 days.� D. S. in FL\n' +
      '�I was not sure about this when I sent off my $1,000 pledge, but I got back $2,000 ' +
      'the very next day!� L.L. in KY\n' +
      '�I didn\'t have the money, so I found myself a partner to work this with. We have ' +
      'received $4,000 over the last 2 days. \n' +
      'I think I made the right decision; don\'t you?� K. C. in FL\n' +
      '�I pick up $3,000 my first day and I  they gave me free leads and all the training,' +
      ' you can too!� J.W. in CA\n' +
      'ANNOUNCING: We will CLOSE your sales for YOU! And Help you get a Fax Blast IMMEDIATELY' +
      ' Upon Your Entry!!!    YOU Make the MONEY!!!\n' +
      'FREE LEADS!!! TRAINING!!!\n' +
      '$$DON\'T WAIT!!! CALL NOW $$\n' +
      'FAX BACK TO: 1-800-421-6318 OR Call 1-800-896-6568 \n' +
      'Name__________________________________' +
      'Phone___________________________________________\n' +
      'Fax_____________________________________' +
      'Email____________________________________________\n' +
      'Best Time To Call_________________________' +
      'Time Zone________________________________________\n' +
      'This message is sent in compliance of the new e-mail bill. "Per Section 301, Paragraph ' +
      '(a)(2)(C) of S. 1618, further transmissions by the sender of this email may be stopped, ' +
      'at no cost to you, by sending a reply to this email address with the word ' +
      '"REMOVE" in the subject line. Errors, omissions, and exceptions excluded.\n' +
      'This is NOT spam! I have compiled this list from our Replicate Database, relative to ' +
      'Seattle Marketing Group, The Gigt, or Turbo Team for the sole purpose of these ' +
      'communications. Your continued inclusion is ONLY by your gracious permission. ' +
      'If you wish to not receive this mail from me, please send an email to ' +
      'tesrewinter@yahoo.com with "Remove" in the subject and you will be deleted immediately.',
  },
  {
    subject: 'FORTUNE 500 COMPANY HIRING, AT HOME REPS.',
    body: 'Help wanted.  We are a 14 year old fortune 500 company, that is\n' +
      'growing at a tremendous rate.  We are looking for individuals who\n' +
      'want to work from home.\n' +
      'This is an opportunity to make an excellent income.  No experience\n' +
      'is required.  We will train you.\n' +
      'So if you are looking to be employed from home with a career that has\n' +
      'vast opportunities, then go:\n' +
      'http://www.basetel.com/wealthnow\n' +
      'We are looking for energetic and self motivated people.  If that is you\n' +
      'than click on the link and fill out the form, and one of our\n' +
      'employement specialist will contact you.\n' +
      'To be removed from our link simple go to:\n' +
      'http://www.basetel.com/remove.html\n' +
      '4139vOLW7-758DoDY1425FRhM1-764SMFc8513fCsLl40',
  },
  {
    subject: 'RE: Important Information Concerning Your Bank Account ',
    body: 'TIRED OF THE BULL OUT THERE?\n' +
      'Want To Stop Losing Money?\n' +
      'WANT A REAL MONEY MAKER?\n' +
      'RECEIVE $1,000-$5,000 TODAY!\n' +
      'EXPERTS ARE CALLING THIS THE FASTEST WAY TO HUGE CASH FLOW EVER CONCEIVED!\n' +
      'A POWERHOUSE Gifting Program You Don\'t Want To Miss!\n' +
      'We work as a TEAM! \n' +
      'This is YOUR Private Invitation GET IN WITH THE FOUNDERS! ' +
      'This is where the BIG BOYS PLAY! ' +
      'The MAJOR PLAYERS are on This ONE For ONCE be where the Players are\n' +
      'This is a system that will drive $1,000\'s to your doorstep \n' +
      'In a short period of time!\n' +
      'Leverage $1000.00 into $50,000, Over and Over Again \n' +
      'THE QUESTION HERE IS:\n' +
      'YOU EITHER WANT TO BE WEALTHY OR YOU DON\'T!!!\n' +
      'WHICH ONE ARE YOU?\n' +
      'I am tossing you a financial lifeline and for your sake I \n' +
      'Hope you GRAB onto it and hold on tight For the Ride of your life!\n' +
      'Testimonials\n' +
      'Hear what average people are doing their first few days:\n' +
      '�We\'ve received 8,000 in 1 day and we are doing that over and over again!\' Q.S. in AL\n' +
      ' �I\'m a single mother in FL and I\'ve received 12,000 in the last 4 days.� D. S. in FL\n' +
      '�I was not sure about this when I sent off my $1,000 pledge, ' +
      'but I got back $2,000 the very next day!� L.L. in KY\n' +
      '�I didn\'t have the money, so I found myself a partner to work this with.' +
      ' We have received $4,000 over the last 2 days. I think I made the right decision; ' +
      'don\'t you?� K. C. in FL\n' +
      '�I pick up $3,000 my first day and I they gave me free leads and all the training, ' +
      'you can too!� J.W. in CA\n' +
      'This WILL be the Most IMPORTANT Call you make this Year!\n' +
      'FREE LEADS!!!!!!! TRAINING!!!!!!!\n' +
      'ANNOUNCING: We will CLOSE your sales for YOU!' +
      ' And Help you get a Fax Blast IMMEDIATELY Upon Your Entry!!!    YOU Make the MONEY!!!\n' +
      'FREE LEADS!!!!!!! TRAINING!!!!!!!\n' +
      '$$DON\'T WAIT!!! CALL NOW $$ 1-800-896-6568\n' +
      'Print and Fax to 1-800-421-6318 or send an email \n' +
      'requesting more information to successleads@firemail.de\n' +
      'Please include your name and telephone number. \n' +
      '*Receive 10,000 FREE LEADS just for responding! (a $499.99 value)\n' +
      'Name___________________________________\n' +
      'Phone___________________________________\n' +
      'Fax_____________________________________\n' +
      'Email___________________________________ \n' +
      'This message is sent in compliance of the new e-mail bill.' +
      ' "Per Section 301, Paragraph (a)(2)(C) of S. 1618, further transmissions ' +
      'by the sender of this email may be stopped, at no cost to you, by sending ' +
      'a reply to this email address with the word "REMOVE" in the subject line. ' +
      'Errors, omissions, and exceptions excluded. \n' +
      'This is NOT spam! I have compiled this list from our Replicate Database, ' +
      'relative to Seattle Marketing Group, The Gigt, or Turbo Team for the sole ' +
      'purpose of these communications. Your continued inclusion is ONLY by your' +
      ' gracious permission. If you wish to not receive this mail from me, please ' +
      'send an email to  tesrewinter@yahoo.com with "Remove" in the subject and you' +
      ' will be deleted immediately.',
  },
  {
    subject: '^^^^^Cell Phone Belt Clips $1.95^^^^^^                           18070',
    body: 'Cellular Phone Accessories All At Below Wholesale Prices!\n' +
      'http://202.101.163.34:81/sites/merchant/sales/\n' +
      'Hands Free Ear Buds 1.99! \n' +
      'Phone Holsters 1.98! \n' +
      'Booster Antennas Only $0.99\n' +
      'Phone Cases 1.98! \n' +
      'Car Chargers 1.98! \n' +
      'Face Plates As Low As 0.99! \n' +
      'Lithium Ion Batteries As Low As 6.94! \n' +
      'http://202.101.163.34:81/sites/merchant/sales/\n' +
      'Click Below For Accessories On All NOKIA, MOTOROLA LG, NEXTEL, \n' +
      'SAMSUNG, QUALCOMM, ERICSSON, AUDIOVOX PHONES At Below \n' +
      'WHOLESALE PRICES!\n' +
      'http://202.101.163.34:81/sites/merchant/sales/\n' +
      '***If You Need Assistance Please Call Us (732) 751-1457***\n' +
      '~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n' +
      'To be removed from future mailings please send your remove \n' +
      'request to: removemenow68994@btamail.net.cn \n' +
      'Thank You and have a super day :)',
  },
  {
    subject: 'Get the Child Support You Deserve                            11.180',
    body: '1) Fight The Risk of Cancer!\n' +
      'http://www.adclick.ws/p.cfm?o=315&s=pk007\n' +
      '2) Slim Down - Guaranteed to lose 10-12 lbs in 30 days\n' +
      'http://www.adclick.ws/p.cfm?o=249&s=pk007\n' +
      '3) Get the Child Support You Deserve - Free Legal Advice\n' +
      'http://www.adclick.ws/p.cfm?o=245&s=pk002\n' +
      '4) Join the Web\'s Fastest Growing Singles Community\n' +
      'http://www.adclick.ws/p.cfm?o=259&s=pk007\n' +
      '5) Start Your Private Photo Album Online!\n' +
      'http://www.adclick.ws/p.cfm?o=283&s=pk007\n' +
      'Have a Wonderful Day,\n' +
      'Offer Manager\n' +
      'PrizeMama',
  },
  {
    subject: 'MSNBC: Rates Hit 35 year Low 4.75% ...12304',
    body: 'Now you can have HUNDREDS of lenders compete for your loan!\n' +
      'FACT: Interest Rates are at their lowest point in 40 years!\n' +
      'You\'re eligible even with less than perfect credit !!\n' +
      '\t* Refinancing\n' +
      '\t* New Home Loans\n' +
      '\t* Debt Consolidation\n' +
      '\t* Debt Consultation\n' +
      '\t* Auto Loans\n' +
      '\t* Credit Cards\n' +
      '\t* Student Loans\n' +
      '\t* Second Mortgage\n' +
      '\t* Home Equity\n' +
      'This Service is 100% FREE without any obligation.\n' +
      'Visit Our Web Site at:  http://marketing-fashion.com/user0201/index.asp?Afft=QM3',
  },
  {
    subject: 'Plans for cable',
    body: 'Want to watch Sporting Events?--Movies?--Pay-Per-View?? \n' +
      'You can assemble from electronic store parts for about $12.00.\n' +
      'We Send You:\n' +
      'E-Z To follow Assembly Instructions\n' +
      'E-Z To read Original Drawings.\n' +
      'Electronic parts lists.\n' +
      'PLUS SOMETHING NEW YOU MUST HAVE! \n' +
      'Something you can\'t do without. \n' +
      'THE UP-TO-DATE REPORT: USING A DESCRAMBLER LEGALLY \n' +
      'Warning: You should not build a TV Descrambler without \n' +
      'reading this report first. \n' +
      'Frequently Asked Questions--CABLE TV DESCRAMBLER \n' +
      'Q: Will the descrambler work on Fiber, TCI, Jarrod \n' +
      'A: The answer is YES. \n' +
      'Q: Do I need a converter box?\n' +
      'A: This plan works with or without a converter box.\n' +
      'Specific instructions are included in the plans for each! \n' +
      'Q: Can the cable company detect that I have the descrambler?\n' +
      'A: No, the signal descrambles right at the box and does\n' +
      'not move back through the line! \n' +
      'Q: Do I have to alter my existing cable system, \n' +
      'television or VCR?\n' +
      'A: The answer is no! \n' +
      'Q: Does this work with my remote control?\n' +
      'A: The answer is yes. The descrambler is \n' +
      'manually controlled--but very easy to use! \n' +
      'Q: Can you email me the plans?\n' +
      'A: No the program comes with an easy to follow picture guide. \n' +
      'Q: Does this work everywhere across the country?\n' +
      'A: Yes, every where in the USA plus England,\n' +
      'Brazil, Canada and other countries! \n' +
      'Q: Is this deal guaranteed?\n' +
      'A: Yes, if you are unhappy for any reason we will refund your money.\n' +
      'ORDER INFORMATION \n' +
      'ACT WITHIN THE NEXT 7 DAYS AND RECEIVE TWO FREE BONUS!!\n' +
      'THE CABLE MANUAL! This manual contains hard to find information your\n' +
      'cable company does not want you to know. Also receive The RADAR\n' +
      'JAMMER PLANS! Never get another speeding ticket. Build you own\n' +
      'radar jammer, this unit will jam police radar so they can\'t get a \n' +
      'reading on \n' +
      'your vechicle. Radar jammers are legal in 48 states. It is simple to \n' +
      'build.\n' +
      'The FREE BONUSES ALONE ARE WORTH ACTING NOW! \n' +
      'THE CABLE DESCRAMBLER KIT COMES WITH A THIRTY DAY\n' +
      'MONEY BACK GUARANTEE! IF YOUR NOT COMPLETELY SATISFIED,\n' +
      'SEND THE CABLE DESCRAMBLER KIT BACK AND YOU KEEP\n' +
      'THE BONUSES FOR FREE. YOU HAVE NOTHING TO LOSE!!\n' +
      'REGULAR PRICE $19.95 ACT WITHIN THE NEXT 7 DAYS\n' +
      'AND RECEIVE FOR $12.95 ACT NOW!! \n' +
      'SIMPLY SEND $12.95 THAT\'S RIGHT ONLY $12.95 BUT YOU MUST \n' +
      'ACT WITHIN 7 DAYS FOR THIS SPECIAL PRICE!!!\n' +
      'SEND $12.95 CHECK OR MONEY ORDER.\n' +
      'TO:\n' +
      'GPG SOFTWARE\n' +
      '12105 WEST CENTER RD #382\n' +
      'OMAHA, NE 68144\n' +
      'THIS INFORMATION IS SOLD FOR EDUCATIONAL PURPOSES ONLY\n' +
      'If you would like to be removed richeyg40@yahoo.com',
  },
  {
    subject: 'HELP WANTED.  WORK FROM HOME REPS.',
    body: 'Help wanted.  We are a 14 year old fortune 500 company, that is\n' +
      'growing at a tremendous rate.  We are looking for individuals who\n' +
      'want to work from home.\n' +
      'This is an opportunity to make an excellent income.  No experience\n' +
      'is required.  We will train you.\n' +
      'So if you are looking to be employed from home with a career that has\n' +
      'vast opportunities, then go:\n' +
      'http://www.basetel.com/wealthnow\n' +
      'We are looking for energetic and self motivated people.  If that is you\n' +
      'than click on the link and fill out the form, and one of our\n' +
      'employement specialist will contact you.\n' +
      'To be removed from our link simple go to:',
  },
  {
    subject: 'A CRY FOR HELP',
    body: 'EAR FRIEND,I AM MRS.  SESE-SEKO WIDOW OF LATE PRESIDENT MOBUTU\n' +
      'SESE-SEKO OF ZAIRE? NOW KNOWN AS DEMOCRATIC REPUBLIC\n' +
      'OF CONGO (DRC).  I AM MOVED TO WRITE YOU THIS LETTER,\n' +
      'THIS WAS IN CONFIDENCE  CONSIDERING MY PRESENTCIRCUMSTANCE AND SITUATION.\n' +
      'I ESCAPED ALONG WITH MY HUSBAND AND TWO OF OUR SONS\n' +
      'GEORGE  KONGOLO  AND BASHER  OUT OF DEMOCRATIC REPUBLIC OF\n' +
      'CONGO (DRC) TO ABIDJAN, COTE D\'IVOIRE WHERE MY FAMILY\n' +
      'AND I SETTLED, WHILE WE LATER MOVED  TO SETTLED IN\n' +
      'MORROCO WHERE MY HUSBAND LATER DIED OF CANCER\n' +
      'DISEASE. HOWEVER DUE TO THIS SITUATION WE DECIDED TO\n' +
      'CHANGED  MOST OF MY HUSBAND\'S BILLIONS OF DOLLARS\n' +
      'DEPOSITED IN SWISS BANK AND OTHER COUNTRIES INTO OTHER\n' +
      'FORMS OF MONEY CODED FOR  SAFE PURPOSE BECAUSE THE NEW\n' +
      'HEAD OF STATE OF (DR) MR LAURENT  KABILA HAS MADE\n' +
      'ARRANGEMENT WITH THE SWISS GOVERNMENT AND OTHER\n' +
      'EUROPEAN COUNTRIES TO FREEZE ALL MY LATE HUSBAND\'S\n' +
      'TREASURES  DEPOSITED IN SOME EUROPEAN COUNTRIES. HENCE\n' +
      'MY CHILDREN AND I DECIDED LAYING LOW IN AFRICA TO\n' +
      'STUDY THE SITUATION TILL  WHEN THINGS GETS BETTER,\n' +
      'LIKE NOW THAT PRESIDENT KABILA IS DEAD AND THE SON\n' +
      'TAKING OVER (JOSEPH KABILA). ONE OF MY LATE HUSBAND\'S\n' +
      'CHATEAUX IN SOUTHERN FRANCE WAS CONFISCATED  BY THE\n' +
      'FRENCH GOVERNMENT, AND AS SUCH I HAD TO CHANGE MY\n' +
      'IDENTITY  SO THAT MY INVESTMENT WILL NOT BE TRACED AND\n' +
      'CONFISCATED. I HAVE DEPOSITED THE SUM EIGHTEEN MILLION\n' +
      'UNITED STATE DOLLARS(US$18,000,000,00.)  WITH A\n' +
      'SECURITY COMPANY , FOR SAFEKEEPING. THE  FUNDS ARE\n' +
      'SECURITY CODED TO PREVENT THEM FROM\n' +
      'KNOWING THE CONTENT. WHAT I WANT YOU TO DO IS TO\n' +
      'INDICATE YOUR INTEREST THAT YOU WILL ASSIST US BY RECEIVING THE MONEY ON OUR\n' +
      'BEHALF.ACKNOWLEDGE THIS MESSAGE, SO THAT I CAN INTRODUCE YOU TO MY SON\n' +
      '(KONGOLO) WHO HAS THE OUT MODALITIES FOR THE CLAIM OF THE SAID FUNDS. I\n' +
      'WANT YOU TO ASSIST IN INVESTING THIS MONEY, BUT I WILL NOT WANT MY IDENTITY\n' +
      'REVEALED. I WILL ALSO WANT TO BUY PROPERTIES AND STOCK IN MULTI-NATIONAL\n' +
      'COMPANIES AND TO ENGAGE IN OTHER SAFE AND\n' +
      'NON-SPECULATIVE INVESTMENTS. MAY I AT THIS POINT\n' +
      'EMPHASISE THE HIGH LEVEL OF CONFIDENTIALITY,  WHICH\n' +
      'THIS BUSINESS DEMANDS, AND HOPE YOU WILL NOT BETRAY\n' +
      'THE TRUST AND CONFIDENCE, WHICH I REPOSE IN YOU. IN\n' +
      'CONCLUSION,  IF YOU WANT TO ASSIST US , MY SON SHALL\n' +
      'PUT YOU IN THE PICTURE  OF THE BUSINESS, TELL YOU\n' +
      'WHERE THE FUNDS ARE CURRENTLY BEING  MAINTAINED AND\n' +
      'ALSO DISCUSS OTHER MODALITIES INCLUDING REMUNERATIONFOR YOUR SERVICES.\n' +
      'FOR THIS REASON KINDLY FURNISH US YOUR CONTACT\n' +
      'INFORMATION, THAT IS YOUR PERSONAL TELEPHONE AND FAX\n' +
      'NUMBER FOR CONFIDENTIAL PURPOSE.BEST REGARDS,MRS M. SESE SEKO',
  },
  {
    subject: 'ADV: Lowest life insurance rates available!                   moode',
    body: 'Lowest rates available for term life insurance! ' +
      'Take a moment and fill out our online form to ' +
      'see the low rate you qualify for. ' +
      'Save up to 70% from regular rates! Smokers accepted! ' +
      'http://www.newnamedns.com/termlife/ \n' +
      'Representing quality nationwide carriers. Act now!',
  },
  {
    subject: '[ILUG] Get the Child Support You Deserve                     10.132',
    body: '1) Fight The Risk of Cancer!\n' +
      'http://www.adclick.ws/p.cfm?o=315&s=pk007\n' +
      '2) Slim Down - Guaranteed to lose 10-12 lbs in 30 days\n' +
      'http://www.adclick.ws/p.cfm?o=249&s=pk007\n' +
      '3) Get the Child Support You Deserve - Free Legal Advice\n' +
      'http://www.adclick.ws/p.cfm?o=245&s=pk002\n' +
      '4) Join the Web\'s Fastest Growing Singles Community\n' +
      'http://www.adclick.ws/p.cfm?o=259&s=pk007\n' +
      '5) Start Your Private Photo Album Online!\n' +
      'http://www.adclick.ws/p.cfm?o=283&s=pk007\n' +
      'Have a Wonderful Day,\n' +
      'Offer Manager\n' +
      'PrizeMama',
  },
  {
    subject: '[ILUG] BUSINESS',
    body: 'CENTRAL BANK OF NIGERIA\n' +
      'FOREIGN REMITTANCE DEPT.\n' +
      'TINUBU SQUARE, LAGOS  NIGERIA\n' +
      'EMAIL-smith_j@mailsurf.com\n' +
      '23TH OF August 2002\n' +
      'ATTN:PRESIDENT/CEO\n' +
      '                    STRICTLY PRIVATE BUSINESS PROPOSAL\n' +
      'I am MR.Johnson S. Abu, the bills and exchange Director at the\n' +
      'ForeignRemittance Department of the Central Bank of Nigeria.  I am \n' +
      'writingyou\n' +
      'this letter to ask for your support and cooperation to carrying thisbusiness\n' +
      'opportunity in my department.  We discovered abandoned the sumof\n' +
      'US$37,400,000.00 (Thirty seven million four hundred thousand unitedstates\n' +
      'dollars) in an account that belong to one of our foreign customers,an\n' +
      'American\n' +
      'late Engr. John Creek (Junior) an oil merchant with the federal government\n' +
      'of\n' +
      'Nigeria who died along with his entire family of a wifeand two children in\n' +
      'Kenya Airbus (A310-300) flight KQ430 in November2000.\n' +
      'Since we heard of his death, we have been expecting his next of kin tocome\n' +
      'over\n' +
      'and put claims for his money as the heir, because we cannotrelease the fund\n' +
      'from his account unless someone applies for claims asthe next  of kin to the\n' +
      'deceased as indicated in our banking guidelines. Unfortunately, neither\n' +
      'their\n' +
      'family member nor distant relative hasappeared to claim the said fund.  Upon\n' +
      'this discovery, I and other officialsin my department have agreed to make\n' +
      'business with you release the totalamount into your account as the heir of\n' +
      'the\n' +
      'fund since no one came forit or discovered either maintained account with\n' +
      'our\n' +
      'bank, other wisethe fund will be returned to the bank treasury as unclaimed\n' +
      'fund.\n' +
      'We have agreed that our ratio of sharing will be as stated thus: 30%for\n' +
      'you as\n' +
      'foreign partner and 70% for us the officials in my department.\n' +
      'Upon the successful completion of this transfer, my colleague and I\n' +
      'willcome to\n' +
      'your country and mind our share. It is from our 60% we intendto import\n' +
      'computer\n' +
      'accessories into my country as way of recycling thefund.  To commence this\n' +
      'transaction we require you to immediately indicateyour interest by calling\n' +
      'me\n' +
      'or sending me a fax immediately on the aboveTelefax # and enclose your\n' +
      'private\n' +
      'contact Telephone #, Fax #, full nameand address and your designated\n' +
      'banking co-\n' +
      ' ordinates to enable us fileletter of  claim to the appropriate department\n' +
      'for\n' +
      'necessary approvalsbefore the transfer can be made.\n' +
      'Note also, this transaction must be kept strictly confidential becauseof its\n' +
      'nature.\n' +
      'NB: Please remember to give me your Phone and Fax No\n' +
      'MR.Johnson Smith  Abu',
  },
  {
    subject: 'Relationship',
    body: 'URGENT PRIVATE & EXTREMELY CONFIDENTIAL\n' +
      'Dear =2C\n' +
      'With profound interest and in utmost confidence=2C I am\n' +
      'soliciting your immediate assistance or co-operation\n' +
      'as to enable us round up an opportunity within my\n' +
      'capability as a result of the death of one of our\n' +
      'contractor =28Beneficiary=29=2E You should not be surprised\n' +
      'as to how I got your contact=2C you were highly\n' +
      'recommended to me with the believe that you are\n' +
      'competent=2C reliable=2C Trustworthy and confident=2E\n' +
      'I am  Dr=2E Bello Ahmed=2C Chief Auditor=2C Special Project\n' +
      'and Foreign Contract Regularization and Disbursement=2C\n' +
      'in the Office of the Auditor General of the Federation\n' +
      'of Federal Republic of Nigeria=2E We work in hand with\n' +
      'the Senate Committee on Foreign Contract Payment=2E Our\n' +
      'duty is to ensure that all contractors are paid their\n' +
      'contract sum in due time=2E\n' +
      'This last payment quarter=2C a total of 30 contractors\n' +
      'were short listed for payment and about 25 of them\n' +
      'have been paid remaining about 5 =28Five=29=2C information\n' +
      'reaching this office indicates that one among the\n' +
      'remaining has been reported dead=2E His name is Mr=2E\n' +
      'Gerrand Schwartz from Sweden=2C he died in the last Air\n' +
      'France Concorde plane crash=2E Meanwhile he finished the\n' +
      'execution of his contract December 19th 1999=2E But\n' +
      'since his death=2C nobody has come forward to put a\n' +
      'claim to his contract fund which is about\n' +
      'US$15=2C500=2C000=2E00 Million =28fifteen Million Five\n' +
      'Hundred Thousand U=2ES Dollars=29 that is why I need your\n' +
      'immediate assistance to expedite the transfer of the\n' +
      'contract amount=2E\n' +
      'With my position as a Director  in the Department of\n' +
      'Contract Regularisation and Disbursement=2C I will\n' +
      'regularize all the necessary documents and present\n' +
      'your company as the bona-fide beneficiary of this fund\n' +
      'in as   much as you respond within 48 hours for\n' +
      'respect of this important message=2E Your unreserved\n' +
      'cooperation in this business is just what we require\n' +
      'for a successful and hitch =96 free transaction=2E\n' +
      'Necessary measures to ensure a risk =96 free and fool\n' +
      'proof transaction and confidentiality has been taken=2E\n' +
      'Kindly signify your interest by replying via my\n' +
      'personal e =96mail address above=2E Upon receipt of your\n' +
      'positive reply we shall discuss on =281=29 Basic Program\n' +
      'for Operation =282=29 Financial Status as to ascertain\n' +
      'your capability=2E  Upon completion of this transaction\n' +
      'I have decided to give you 30% of the total sum=2C 60%\n' +
      'of the fund which is our share will be used for\n' +
      'investment in your company or in any other company of\n' +
      'our choice=2E While10% has been mapped out to take care\n' +
      'of any minor expenses incurred=2E Take note that this\n' +
      'project will last for only 21 working days=2E\n' +
      'I expect your response in time =28within 48 hours=29 as\n' +
      'time is of great essence in this transaction=2E\n' +
      'God Bless and Kind Regards=2C\n' +
      'Dr=2E Bello Ahmed',
  },
  {
    subject: 'Save 84% on CE Credits',
    body: 'Save 84% on C.E. Credits & Pre-Licensing Courses\n' +
      ' State CE, CLU, CFP, CPA and Securities\n' +
      ' Unlimited courses & credits for 24 months\n' +
      ' Regular Price:$1298, IQ Price:$199\t\n' +
      '*\tNo Hidden Fees\n' +
      '*\tOver 16,000 Credits\n' +
      '*\tOver 300 Courses\n' +
      '*\t90% Internet Based\n' +
      '*\tHigh Quality Courses\n' +
      '*\tUnlimited Access\n' +
      'Complete this form for a FREE Guest Demo!\t \n' +
      'Name:\t \t \n' +
      'E-mail:\t \t \n' +
      'Phone:\t \t \n' +
      'City:\t \t State:\t \t  \t\n' +
      'We don\'t want anybody to receive our mailing who does not wish to\n' +
      'receive them. To be removed from this mailing list, DO NOT REPLY to this\n' +
      'message. Instead, go here: http://www.InsuranceIQ.com/optout\n' +
      'Legal Notice http://www.insuranceiq.com/legal.htm  ',
  },
  {
    subject: 'A CRY FOR HELP',
    body: 'DEAR FRIEND,I AM MRS.  SESE-SEKO WIDOW OF LATE PRESIDENT MOBUTU\n' +
      'SESE-SEKO OF ZAIRE? NOW KNOWN AS DEMOCRATIC REPUBLIC\n' +
      'OF CONGO (DRC).  I AM MOVED TO WRITE YOU THIS LETTER,\n' +
      'THIS WAS IN CONFIDENCE  CONSIDERING MY PRESENTCIRCUMSTANCE AND SITUATION.\n' +
      'I ESCAPED ALONG WITH MY HUSBAND AND TWO OF OUR SONS\n' +
      'GEORGE  KONGOLO  AND BASHER  OUT OF DEMOCRATIC REPUBLIC OF\n' +
      'CONGO (DRC) TO ABIDJAN, COTE D\'IVOIRE WHERE MY FAMILY\n' +
      'AND I SETTLED, WHILE WE LATER MOVED  TO SETTLED IN\n' +
      'MORROCO WHERE MY HUSBAND LATER DIED OF CANCER\n' +
      'DISEASE. HOWEVER DUE TO THIS SITUATION WE DECIDED TO\n' +
      'CHANGED  MOST OF MY HUSBAND\'S BILLIONS OF DOLLARS\n' +
      'DEPOSITED IN SWISS BANK AND OTHER COUNTRIES INTO OTHER\n' +
      'FORMS OF MONEY CODED FOR  SAFE PURPOSE BECAUSE THE NEW\n' +
      'HEAD OF STATE OF (DR) MR LAURENT  KABILA HAS MADE\n' +
      'ARRANGEMENT WITH THE SWISS GOVERNMENT AND OTHER\n' +
      'EUROPEAN COUNTRIES TO FREEZE ALL MY LATE HUSBAND\'S\n' +
      'TREASURES  DEPOSITED IN SOME EUROPEAN COUNTRIES. HENCE\n' +
      'MY CHILDREN AND I DECIDED LAYING LOW IN AFRICA TO\n' +
      'STUDY THE SITUATION TILL  WHEN THINGS GETS BETTER,\n' +
      'LIKE NOW THAT PRESIDENT KABILA IS DEAD AND THE SON\n' +
      'TAKING OVER (JOSEPH KABILA). ONE OF MY LATE HUSBAND\'S\n' +
      'CHATEAUX IN SOUTHERN FRANCE WAS CONFISCATED  BY THE\n' +
      'FRENCH GOVERNMENT, AND AS SUCH I HAD TO CHANGE MY\n' +
      'IDENTITY  SO THAT MY INVESTMENT WILL NOT BE TRACED AND\n' +
      'CONFISCATED. I HAVE DEPOSITED THE SUM EIGHTEEN MILLION\n' +
      'UNITED STATE DOLLARS(US$18,000,000,00.)  WITH A\n' +
      'SECURITY COMPANY , FOR SAFEKEEPING. THE  FUNDS ARE\n' +
      'SECURITY CODED TO PREVENT THEM FROM\n' +
      'KNOWING THE CONTENT. WHAT I WANT YOU TO DO IS TO\n' +
      'INDICATE YOUR INTEREST THAT YOU WILL ASSIST US BY RECEIVING THE MONEY ON OUR\n' +
      'BEHALF.ACKNOWLEDGE THIS MESSAGE, SO THAT I CAN INTRODUCE YOU TO MY SON\n' +
      '(KONGOLO) WHO HAS THE OUT MODALITIES FOR THE CLAIM OF THE SAID FUNDS. I\n' +
      'WANT YOU TO ASSIST IN INVESTING THIS MONEY, BUT I WILL NOT WANT MY IDENTITY\n' +
      'REVEALED. I WILL ALSO WANT TO BUY PROPERTIES AND STOCK IN MULTI-NATIONAL\n' +
      'COMPANIES AND TO ENGAGE IN OTHER SAFE AND\n' +
      'NON-SPECULATIVE INVESTMENTS. MAY I AT THIS POINT\n' +
      'EMPHASISE THE HIGH LEVEL OF CONFIDENTIALITY,  WHICH\n' +
      'THIS BUSINESS DEMANDS, AND HOPE YOU WILL NOT BETRAY\n' +
      'THE TRUST AND CONFIDENCE, WHICH I REPOSE IN YOU. IN\n' +
      'CONCLUSION,  IF YOU WANT TO ASSIST US , MY SON SHALL\n' +
      'PUT YOU IN THE PICTURE  OF THE BUSINESS, TELL YOU\n' +
      'WHERE THE FUNDS ARE CURRENTLY BEING  MAINTAINED AND\n' +
      'ALSO DISCUSS OTHER MODALITIES INCLUDING REMUNERATIONFOR YOUR SERVICES.\n' +
      'FOR THIS REASON KINDLY FURNISH US YOUR CONTACT\n' +
      'INFORMATION, THAT IS YOUR PERSONAL TELEPHONE AND FAX\n' +
      'NUMBER FOR CONFIDENTIAL PURPOSE.BEST REGARDS,MRS M. SESE SEKO',
  },
  {
    subject: 'Join the Web\'s Fastest Growing Singles Community                       14.51',
    body: '1) Fight The Risk of Cancer!\n' +
      'http://www.adclick.ws/p.cfm?o=315&s=pk007\n' +
      '2) Slim Down - Guaranteed to lose 10-12 lbs in 30 days\n' +
      'http://www.adclick.ws/p.cfm?o=249&s=pk007\n' +
      '3) Get the Child Support You Deserve - Free Legal Advice\n' +
      'http://www.adclick.ws/p.cfm?o=245&s=pk002\n' +
      '4) Join the Web\'s Fastest Growing Singles Community\n' +
      'http://www.adclick.ws/p.cfm?o=259&s=pk007\n' +
      '5) Start Your Private Photo Album Online!\n' +
      'http://www.adclick.ws/p.cfm?o=283&s=pk007\n' +
      'Have a Wonderful Day,\n' +
      'Offer Manager\n' +
      'PrizeMama',
  },
];

export default spam;
