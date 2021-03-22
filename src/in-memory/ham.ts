import { EmailHeaders } from '../email-headers';

/**
 * 20 mocked in-memory emails that aren't spam.
 */
const ham: Array<EmailHeaders> = [
  {
    subject: 'Re: New Sequences Window',
    body: 'I can\'t reproduce this error.\n' +
      'For me it is very repeatable... (like every time, without fail).\n' +
      'This is the debug log of the pick happening ...',
  },
  {
    subject: '[zzzzteana] RE: Alexander',
    body: 'Martin A posted:\n' +
      'Tassos Papadopoulos, the Greek sculptor behind the plan, judged that the\n' +
      ' limestone of Mount Kerdylio, 70 miles east of Salonika and not far from the\n' +
      ' Mount Athos monastic community, was ideal for the patriotic sculpture. \n' +
      ' As well as Alexander\'s granite features, 240 ft high and 170 ft wide, a\n' +
      ' museum, a restored amphitheatre and car park for admiring crowds are\n' +
      'planned\n' +
      'So is this mountain limestone or granite?\n' +
      'If it\'s limestone, it\'ll weather pretty fast.',
  },
  {
    subject: '[zzzzteana] Moscow bomber',
    body: 'Man Threatens Explosion In Moscow \n' +
      'Thursday August 22, 2002 1:40 PM\n' +
      'MOSCOW (AP) - Security officers on Thursday seized an unidentified man who\n' +
      'said he was armed with explosives and threatened to blow up his truck in\n' +
      'front of Russia\'s Federal Security Services headquarters in Moscow, NTV\n' +
      'television reported.\n' +
      'The officers seized an automatic rifle the man was carrying, then the man\n' +
      'got out of the truck and was taken into custody, NTV said. No other details\n' +
      'were immediately available.\n' +
      'The man had demanded talks with high government officials, the Interfax and\n' +
      'ITAR-Tass news agencies said. Ekho Moskvy radio reported that he wanted to\n' +
      'talk with Russian President Vladimir Putin.\n' +
      'Police and security forces rushed to the Security Service building, within\n' +
      'blocks of the Kremlin, Red Square and the Bolshoi Ballet, and surrounded the\n' +
      'man, who claimed to have one and a half tons of explosives, the news\n' +
      'agencies said. Negotiations continued for about one and a half hours outside\n' +
      'the building, ITAR-Tass and Interfax reported, citing witnesses.\n' +
      'The man later drove away from the building, under police escort, and drove\n' +
      'to a street near Moscow\'s Olympic Penta Hotel, where authorities held\n' +
      'further negotiations with him, the Moscow police press service said. The\n' +
      'move appeared to be an attempt by security services to get him to a more\n' +
      'secure location.',
  },
  {
    subject: '[IRR] Klez: The Virus That  Won\'t Die',
    body: 'Klez: The Virus That Won\'t Die\n' +
      'Already the most prolific virus ever, Klez continues to wreak havoc.\n' +
      'Andrew Brandt\n' +
      '>>From the September 2002 issue of PC World magazine\n' +
      'Posted Thursday, August 01, 2002\n' +
      'The Klez worm is approaching its seventh month of wriggling across \n' +
      'the Web, making it one of the most persistent viruses ever. And \n' +
      'experts warn that it may be a harbinger of new viruses that use a \n' +
      'combination of pernicious approaches to go from PC to PC.\n' +
      'Antivirus software makers Symantec and McAfee both report more than \n' +
      '2000 new infections daily, with no sign of letup at press time. The \n' +
      'British security firm MessageLabs estimates that 1 in every 300 \n' +
      'e-mail messages holds a variation of the Klez virus, and says that \n' +
      'Klez has already surpassed last summer\'s SirCam as the most prolific \n' +
      'virus ever.\n' +
      'And some newer Klez variants aren\'t merely nuisances--they can carry \n' +
      'other viruses in them that corrupt your data.',
  },
  {
    subject: 'Re: Insert signature',
    body: 'On Wed Aug 21 2002 at 15:46, Ulises Ponce wrote:\n' +
      '> Hi!\n' +
      '> Is there a command to insert the signature using a combination of keys and not\n' +
      '> to have sent the mail to insert it then?\n' +
      'I simply put it (them) into my (nmh) component files (components,\n' +
      'replcomps, forwcomps and so on).  That way you get them when you are\n' +
      'editing your message.  Also, by using comps files for specific\n' +
      'folders you can alter your .sig per folder (and other tricks).  See\n' +
      'the docs for (n)mh for all the details.\n' +
      'There might (must?) also be a way to get sedit to do it, but I\'ve\n' +
      'been using gvim as my exmh message editor for a long time now.  I\n' +
      'load it with a command that loads some email-specific settings, eg,\n' +
      'to "syntax" colour-highlight the headers and quoted parts of an\n' +
      'email)... it would be possible to map some (vim) keys that would add\n' +
      'a sig (or even give a selection of sigs to choose from).\n' +
      'And there are all sorts of ways to have randomly-chosen sigs...\n' +
      'somewhere at rtfm.mit.edu... ok, here we go:\n' +
      'rtfm.mit.edu/pub/usenet-by-group/news.answers/signature_finger_faq.\n' +
      '(Warning... it\'s old, May 1995).\n' +
      '> Regards,\n' +
      '> Ulises\n' +
      'Hope this helps.\n' +
      'Cheers\n' +
      'Tony',
  },
  {
    subject: 'Re: [zzzzteana] Nothing like mama used to make',
    body: '>  in adding cream to spaghetti carbonara, which has the same effect on pasta as\n' +
      '>  making a pizza a deep-pie; \n' +
      'I just had to jump in here as Carbonara is one of my favourites to make and ask \n' +
      'what the hell are you supposed to use instead of cream?  I\'ve never seen a \n' +
      'recipe that hasn\'t used this.  Personally I use low fat creme fraiche because it \n' +
      'works quite nicely but the only time I\'ve seen an supposedly authentic recipe \n' +
      'for carbonara  it was identical to mine (cream, eggs and lots of fresh parmesan) \n' +
      'except for the creme fraiche.\n' +
      'Stew',
  },
  {
    subject: 'Re: [zzzzteana] Nothing like mama used to make',
    body: '> I just had to jump in here as Carbonara is one of my favourites to make and \n' +
      '> ask \n' +
      '> what the hell are you supposed to use instead of cream? \n' +
      'Isn\'t it just basically a mixture of beaten egg and bacon (or pancetta, \n' +
      'really)? You mix in the raw egg to the cooked pasta and the heat of the pasta \n' +
      'cooks the egg. That\'s my understanding.\n' +
      'Martin',
  },
  {
    subject: '[zzzzteana] Playboy wants to go out with a bang',
    body: 'The Scotsman - 22 August 2002\n' +
      ' Playboy wants to go out with a bang \n' +
      ' AN AGEING Berlin playboy has come up with an unusual offer to lure women into\n' +
      ' his bed - by promising the last woman he sleeps with an inheritance of 250,000\n' +
      ' (�160,000). \n' +
      ' Rolf Eden, 72, a Berlin disco owner famous for his countless sex partners,\n' +
      ' said he could imagine no better way to die than in the arms of an attractive\n' +
      ' young woman - preferably under 30. \n' +
      ' "I put it all in my last will and testament - the last woman who sleeps with\n' +
      ' me gets all the money," Mr Eden told Bild newspaper. \n' +
      ' "I want to pass away in the most beautiful moment of my life. First a lot of\n' +
      ' fun with a beautiful woman, then wild sex, a final orgasm - and it will all\n' +
      ' end with a heart attack and then I�m gone." \n' +
      ' Mr Eden, who is selling his nightclub this year, said applications should be\n' +
      ' sent in quickly because of his age. "It could end very soon," he said.',
  },
  {
    subject: 'Re: [zzzzteana] Nothing like mama used to make',
    body: 'Martin Adamson wrote:\n' +
      '> Isn\'t it just basically a mixture of beaten egg and bacon (or pancetta, \n' +
      '> really)? You mix in the raw egg to the cooked pasta and the heat of the pasta \n' +
      '> cooks the egg. That\'s my understanding.\n' +
      'You\'re probably right, mine\'s just the same but with the cream added to the \n' +
      'eggs.  I guess I should try it without.  Actually looking on the internet for a \n' +
      'recipe I found this one from possibly one of the scariest people I\'ve ever seen, \n' +
      'and he\'s a US Congressman:\n' +
      'That\'s one of the worst non-smiles ever.\n' +
      'Stew\n' +
      'ps. Apologies if any of the list\'s Maine residents voted for this man, you won\'t \n' +
      'do it again once you\'ve seen this pic.\n' +
      'Stewart Smith\n' +
      'Scottish Microelectronics Centre, University of Edinburgh.\n' +
      'http://www.ee.ed.ac.uk/~sxs/',
  },
  {
    subject: '[zzzzteana] Meaningful sentences',
    body: 'The Scotsman\n' +
      ' Thu 22 Aug 2002 \n' +
      ' Meaningful sentences \n' +
      ' Tracey Lawson \n' +
      ' If you ever wanted to look like "one of the most dangerous inmates in prison\n' +
      ' history", as one judge described Charles Bronson, now\'s your chance. Bronson -\n' +
      ' the serial hostage taker, not the movie star - has written a health and\n' +
      ' fitness guide in which he shares some of the secrets behind his legendary\n' +
      ' muscle power. \n' +
      ' Solitary Fitness - a title which bears testament to the fact that Bronson, 48,\n' +
      ' has spent 24 of his 28 prison years in solitary confinement - explains how he\n' +
      ' has turned himself into a lean, mean, fitness machine while living 23 hours a\n' +
      ' day in a space just 12 feet by eight feet, on a diet of scrubs grub and at\n' +
      ' virtually no cost. \n' +
      ' The book is aimed at those who want to get fabulously fit without spending a\n' +
      ' fortune on gym memberships, protein supplements or designer trainers, and\n' +
      ' starts with a fierce attack on some of the expensive myths churned out by the\n' +
      ' exercise industry. \n' +
      ' "I pick up a fitness mag, I start to laugh and I wipe my arse with it," is the\n' +
      ' opening paragraph penned by Bronson. "It\'s a joke and a big con and they call\n' +
      ' me a criminal!" You can\'t help feeling he has a point. \n' +
      ' This is not the first book that Bronson has written from behind bars, having\n' +
      ' already published Birdman Opens His Mind, which features drawings and poems\n' +
      ' created by Bronson while in prison. And he is not the first prisoner to\n' +
      ' discover creative expression while residing at Her Majesty\'s pleasure. \n' +
      ' Jimmy Boyle, the Scots sculptor and novelist, discovered his artistic talents\n' +
      ' when he was sent to Barlinnie Prison\'s famous special unit, which aimed to\n' +
      ' help inmates put their violent pasts behind them by teaching them how to\n' +
      ' express their emotions artistically. Boyle was sentenced to life for the\n' +
      ' murder of "Babs" Rooney in 1967. Once released, he moved to Edinburgh where he\n' +
      ' has become a respected artist. His first novel, Hero of the Underworld, was\n' +
      ' published in 1999 and his autobiography, A Sense of Freedom, was made into an\n' +
      ' award-winning film. \n' +
      ' Hugh Collins was jailed for life in 1977 for the murder of William Mooney in\n' +
      ' Glasgow, and in his first year in Barlinnie prison stabbed three prison\n' +
      ' officers, earning him an extra seven-year sentence. But, after being\n' +
      ' transferred to the same unit that Boyle attended, he learned to sculpt and\n' +
      ' developed an interest in art. He later published Autobiography of a Murderer,\n' +
      ' a frank account of Glasgow\'s criminal culture in the 1960s, which received\n' +
      ' critical praise. \n' +
      ' And Lord Archer doesn\'t seem to have had trouble continuing to write the books\n' +
      ' that have made him millions while in jail. He recently signed a three-book\n' +
      ' deal with Macmillan publishers worth a reported \'10 million, and is no doubt\n' +
      ' scribbling away as we speak. \n' +
      ' So why is it that men like Collins, Bronson and Boyle, who can be so\n' +
      ' destructive towards society on the outside, can become so creative once stuck\n' +
      ' on the inside? Steve Richards, Bronson\'s publisher, has published many books\n' +
      ' about criminal figures and believes the roots of this phenomenon are both\n' +
      ' pragmatic and profound. \n' +
      ' He says: "Prison is sometimes the first time some criminals will ever have\n' +
      ' known a stable environment, and this can be the first time they have the\n' +
      ' chance to focus on their creative skills. \n' +
      ' "It may also be the first time that they have really had the chance of an\n' +
      ' education, if their early years have been hard. It could be the first time\n' +
      ' anyone has offered them the chance to explore their creative talents." \n' +
      ' However, Richards believes the reasons are also deeper than that. He says:\n' +
      ' "Once they are behind bars, the cold light of day hits them, and they examine\n' +
      ' the very essence of who they are. \n' +
      ' "They ask themselves, am I a man who wants to be remembered for violence? Or\n' +
      ' am I a man who can contribute to society, who can be remembered for something\n' +
      ' good?" \n' +
      ' Bronson - who was born Michael Gordon Peterson, but changed his name to that\n' +
      ' of the Hollywood star of the Death Wish films - has, so far, been remembered\n' +
      ' mainly for things bad. He was originally jailed for seven years for armed\n' +
      ' robbery in 1974, and has had a series of sentences added to his original term\n' +
      ' over the years as a result of attacking people in prison. In 2000 he was\n' +
      ' jailed for life after being convicted of holding a teacher hostage for nearly\n' +
      ' two days during a jail siege. \n' +
      ' Standing five feet ten and a half inches tall and weighing 210lbs, he is\n' +
      ' renowned for his strength. He has bent metal cell doors with his bare hands\n' +
      ' and does up to 3,000 - yes, 3,000 - press-ups a day. As he puts it: "I can hit\n' +
      ' a man 20 times in four seconds, I can push 132 press ups in 60 seconds." \n' +
      ' But judging by our current obsession with health and exercise, Solitary\n' +
      ' Fitness might be the book which will see Bronson\'s face sitting on every\n' +
      ' coffee table in the land. He might be the man to give us the dream body which\n' +
      ' so many so-called fitness gurus promise but fail to motivate us into. Because\n' +
      ' Bronson has learned to use words as powerfully as he can use his fists. \n' +
      ' "All this crap about high-protein drinks, pills, diets, it\'s just a load of\n' +
      ' bollocks and a multi-million-pound racket," he writes, in what can only be\n' +
      ' described as a refreshingly honest style. "We can all be fat lazy bastards,\n' +
      ' it\'s our choice, I\'m sick of hearing and reading about excuses, if you stuff\n' +
      ' your face with shit you become shit, that\'s logical to me." \n' +
      ' As motivational mantras go, that might be just the kick up the, er, backside\n' +
      ' we all needed. \n' +
      ' Solitary Fitness by Charles Bronson is published by Mirage Publishing and will\n' +
      ' be available in bookstores from October at $7.99',
  },
  {
    subject: 'Re: New Sequences Window',
    body: '> From:  "J. W. Ballantine"\n' +
      '> Date:  Wed, 21 Aug 2002 09:51:31 -0400\n' +
      '> I CVS\'ed the unseen/Sequences changes and installed them, and have only one \n' +
      '> real issue.\n' +
      '> I use the unseen window rather than the exmh icon, and with the new code\n' +
      '> I can\'t seem to be able to.  How many unseen when when I have the main window open\n' +
      '> is not really necessary.\n' +
      'hmmm, I stole the code from unseenwin, but I never tested it since I don\'t use \n' +
      'that functionality.  Consider it on my list of things to check.\n' +
      'Chris\n' +
      'Chris Garrigues                 http://www.DeepEddy.Com/~cwg/\n' +
      'virCIO                          http://www.virCIO.Com\n' +
      '716 Congress, Suite 200\n' +
      'Austin, TX  78701\t\t+1 512 374 0500\n' +
      '  World War III:  The Wrong-Doers Vs. the Evil-Doers.',
  },
  {
    subject: '[SAtalk] SA CGI Configurator Scripts',
    body: 'I have been trying to research via SA mirrors and search engines if a canned\n' +
      'script exists giving clients access to their user_prefs options via a\n' +
      'web-based CGI interface. Numerous ISPs provide this feature to clients, but\n' +
      'so far I can find nothing. Our configuration uses Amavis-Postfix and ClamAV\n' +
      'for virus filtering and Procmail with SpamAssassin for spam filtering. I\n' +
      'would prefer not to have to write a script myself, but will appreciate any\n' +
      'suggestions.',
  },
  {
    subject: '[SAdev] Interesting approach to Spam handling..',
    body: 'Hello, have you seen and discussed this article and his approach?\n' +
      'Thank you\n' +
      'http://www.paulgraham.com/spam.html\n' +
      '-- "Hell, there are no rules here-- we\'re trying to accomplish something."\n' +
      '-- Thomas Alva Edison',
  },
  {
    subject: 'Re: New Sequences Window',
    body: '  | The background color in this window is the same as the background \n' +
      '  | color in the ftoc.\n' +
      'That\'s what I\'d like to vary - particularly as the ftoc background isn\'t\n' +
      'constant - messages in the unseen sequence have a different background\n' +
      'than others.\n' +
      'In the ftoc that\'s fine, but in the sequences window, it isn\'t needed.\n' +
      'unseen already has a different foreground there (no problem with that),\n' +
      'it doesn\'t need a different background as well.\n' +
      'I\'ll play about a bit with this, and with making it vertical instead of\n' +
      'horizontal, and see what turns up.\n' +
      '  | The only sequences that are defined there are sequences which are defined\n' +
      '  | in app-defaults-color or ~/exmh/exmh-defaults-color.\n' +
      'OK.\n' +
      '  | I\'ve been thinking about how to dynamically generate highlighting for\n' +
      '  | other sequences, but haven\'t got that figured out yet.\n' +
      'In this case, highlighting wasn\'t what I was most concerned about.\n' +
      'A method to get messages in & out of sequences comes first, how it\n' +
      'displays is a secondary consideration.   But as a suggestion, have an\n' +
      '"all unknown" sequence highlight, any message in a sequence which has\n' +
      'no defined highlighting (where defined includes defined to not be treated\n' +
      'specially) gets highlighted the same way (maybe something as boring as\n' +
      'a dark brown text colour - almost indistinguishable from the normal black)\n' +
      '  | > > Any chance of making the current message a little brighter background?\n' +
      '  | I don\'t see any reason why not.  Experiment and let me know what works for you.\n' +
      'Done some of that.   First, the most significant change came from changing\n' +
      'relief from raised to sunken.   I don\'t know why, but it just looks better\n' +
      '(for me anyway).   But even with that, cur and unseen are still just a\n' +
      'bit too similar.   I ended up using\n' +
      '*sequence_cur:  -background {PaleGoldenrod} -relief sunken -borderwidth 2\n' +
      'The unnecessary braces are just because some of the colours I was using\n' +
      'had spaces in their names.   PaleGoldenrod translates as #eee8aa which\n' +
      'is probably safer for generic use.\n' +
      'kre',
  },
  {
    subject: '[SAdev] Party in San Francisco tonight',
    body: 'I don\'t know how make of you are in the Bay Area but EFF is having a benifit \n' +
      'party ast the DNA Lounge in San Francisco tonight. Wil Weaton (Wesley Crussher \n' +
      'from star Trek TNG) will fight Barney the Dinasour.\n' +
      'Come on by if you\'re not doing anything.',
  },
  {
    subject: 'Re: [SAdev] Live Rule Updates after Release ???',
    body: 'Yes - great minds think alike. But even withput eval rules it would be very \n' +
      'useful. It would allow us to respond quickly to spammer\'s tricks.\n' +
      'Theo Van Dinter wrote:\n' +
      '> On Thu, Aug 22, 2002 at 07:27:52AM -0700, Marc Perkel wrote:\n' +
      '>>Has anyone though of the idea of live updates of rules after release? The \n' +
      '>>idea being that the user can run a cron job once a week or so and get the \n' +
      '>>new default rule set. This would allow us to react faster to:\n' +
      '> I suggested this a few months ago.  I don\'t remember the details of what\n' +
      '> came out of it except that it would only be useful for non-eval rules\n' +
      '> since those require code changes.\n',
  },
  {
    subject: 'Re: New Sequences Window',
    body: 'I\'ve done this.  It\'s not as pretty as I think it should be, but it works.  \n' +
      'I\'m going to leave the cosmetic issues to others.  When I update the \n' +
      'documentation, I\'ll add this to the exmh.TODO file.\n' +
      'I\'m leaving for a 2 1/2 week vacation in a week, so this is the last new \n' +
      'functionality I\'m going to add for a while.  Also, I now have pretty much \n' +
      'everything in there that I want for my own use, so I\'m probably pretty much \n' +
      'done.  I\'ll work on bug fixes and documentation before my vacation, and \n' +
      'hopefully do nothing more afterwards.\n' +
      'Chris',
  },
  {
    subject: 'The case for spam',
    body: 'SpamAssassin is hurting democracy!\n' +
      'Owen\n' +
      '---------------------------------------------------------------------------------------------------------------------\n' +
      'http://www.bayarea.com/mld/mercurynews/news/opinion/3900215.htm\n' +
      'Internet can level the political playing field\n' +
      'By Mike McCurry and Larry Purpuro\n' +
      'NOT many months from now, people across the country will experience one \n' +
      'of the great recurring features of American democracy. At shopping \n' +
      'malls, on factory floors, at church socials and even on our front \n' +
      'stoops, we will be approached by individuals who want to represent us in \n' +
      'public office. While chances are high that we won\'t know them \n' +
      'personally, they will walk up to us, offer a handshake and a flier and \n' +
      'ask for our votes.\n' +
      'Just as technology is affecting every other area of communication, it \n' +
      'has begun to affect the way political candidates communicate with voters.\n' +
      'In this year\'s GOP gubernatorial primary, California Secretary of State \n' +
      'Bill Jones, who faced better-funded candidates, acquired the e-mail \n' +
      'addresses of more than a million potential California voters and sent \n' +
      'each an unsolicited e-mail asking for support.\n' +
      'That day, he might have chosen any of the more traditional -- and more \n' +
      'expensive -- methods of contacting voters, such as direct mail, radio \n' +
      'spots or TV ads. But he spent only about 2 cents per message, instead of \n' +
      '35 cents or more per message for direct mail or in another medium.\n' +
      'Had Jones chosen direct mail, radio or TV, that communication would have \n' +
      'been equally ``unsolicited,\'\' as defined in the e-mail world. Few voters \n' +
      'would have ``opted in\'\' to receive campaign information from Jones \n' +
      'through any of those channels.\n' +
      'The response to Jones\' e-mail effort, however, was swift and intense. He \n' +
      'was lambasted by anti-spam advocates, and media coverage was almost \n' +
      'entirely negative. To be fair, some of Jones\' tactics could have been \n' +
      'refined. He used a less-than-perfect list and no standard-practice \n' +
      '``paid for\'\' disclaimer in the message.\n' +
      'His detractors, however, attacked him not for his tactical miscues but \n' +
      'because the e-mail was sent unsolicited. In fact, Jones\' online campaign \n' +
      'may have been his most visible asset. In an era of cynicism toward money \n' +
      'in politics -- money typically spent on other unsolicited communication \n' +
      'mediums -- Jones tried to level the playing field.\n' +
      'No one likes commercial spam. It is irrelevant and untargeted and can be \n' +
      'highly intrusive and even offensive. But as a sophisticated society, \n' +
      'it\'s time to differentiate commercial spam from very different \n' +
      'unsolicited e-mail sent by political candidates to voters.\n' +
      'The debate is particularly relevant in light of legislation in Congress \n' +
      'that would constitute the first federal law to directly address spam. We \n' +
      'believe e-mail is no more intrusive than direct mail, telemarketing or \n' +
      'TV advertising when it comes to politicians seeking to reach voters. A \n' +
      'simple link in good e-mail campaigns allows recipients to opt out of \n' +
      'future mailings. Direct mail takes at least a phone call or stamp to be \n' +
      'taken off a list, and viewers must repeatedly endure TV ads.\n' +
      'When a candidate lacks a large campaign war chest, he or she can use the \n' +
      'Internet to provide constituents with information to better prepare them \n' +
      'to perform their civic duty of casting educated votes. With more than 60 \n' +
      'percent of all potential voters in this country possessing e-mail \n' +
      'accounts, it makes sense that political candidates use this medium.\n' +
      'Candidates might avoid some of the tactical problems encountered by the \n' +
      'Jones campaign if they use the technologies available today that better \n' +
      'ensure quality of e-mail lists and target content to specific recipient \n' +
      'groups.\n' +
      'But the broader point remains. When a political candidate sends a voter \n' +
      'an e-mail, that recipient can choose to delete the message without \n' +
      'opening it, unsubscribe from the list, read it or even reply and engage \n' +
      'the sender. That choice should belong to the voter -- not to anti-spam \n' +
      'advocates whose efforts are better focused on commercial e-mail. \n' +
      'Political candidates should be free to communicate with voters as best \n' +
      'they can, and let voters decide what to do with that information.\n' +
      '--------------------------------------------------------------------------------\n' +
      'Mike McCurry, former press secretary for President Clinton, is CEO of an \n' +
      'advocacy management and communications software company. Larry Purpuro, \n' +
      'the former Republican National Committee deputy chief of staff, is \n' +
      'founder and president of a political e-marketing firm. This was written \n' +
      'for the Los Angeles Times. \n' +
      'http://xent.com/mailman/listinfo/fork',
  },
  {
    subject: '[IIU] Eircom aDSL Nat\'ing',
    body: 'Hi all,\n' +
      'apologies for the possible silly question (i don\'t think it is, but), \n' +
      'but is Eircom\'s aDSL service NAT\'ed?\n' +
      'and what implications would that have for VoIP? I know there are \n' +
      'difficulties with VoIP or connecting to clients connected to a NAT\'ed \n' +
      'network from the internet wild (i.e. machines with static, real IPs)\n' +
      'any help pointers would be helpful,\n' +
      'cheers\n' +
      'rgrds,\n' +
      'Bernard',
  },
  {
    subject: '[zzzzteana] Re: Australian Catholic Kiddie Perv Steps Aside',
    body: '--- In forteana@y..., "D.McMann" wrote:\n' +
      '> Robert Moaby, 33, who sent death threats to staff, was also jailed\n' +
      '> for hoarding indecent pictures of children on his home computer.\n' +
      '> Hmm, if I didn\'t trust our government and secret police, I could \n' +
      'look at\n' +
      '> this another way....\n' +
      'There is a bit of circumstantial evidence - apparently some MT \n' +
      'listers were approached by him (via email) - a little research in \n' +
      'dejanews/google groups showed a number of messages from him, clearly \n' +
      'hoping to contact girls, appearing in "alt.teens" and similar groups -\n' +
      ' I just tried a Google Groups search on "Robert Moaby" and some of \n' +
      'them came top of the list.\n' +
      'Note for Marie - "MT" stands for Mark Thomas, a slightly slimmer, UK \n' +
      'version of your Michael Moore - the mailing list is named after him. \n' +
      'Rob',
  },
];

export default ham;
