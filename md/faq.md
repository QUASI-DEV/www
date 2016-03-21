> Version 1.6

# Frequently Asked Questions
  
> To become part of the conversation, ask questions and receive help, join our [Slack chat room](http://Slock.it:3000/).




## The Project


### Overview

Slock.it UG is a German company building the future infrastructure of the sharing economy. Our first product, the [Ethereum Computer](/ethereum_computer.html), brings blockchain technology to the entire home, making it possible to rent access to any compatible smart object and accept payments without intermediaries. We aim for this product and its ecosystem to be funded by a Decentralized Autonomous Organization (DAO), a type of digital company or trust where token holders benefit financially from the revenue of the products they supported - think of it as a Kickstarter on steroids.

The DAO model is free and open source for anyone to reproduce and study, and our white paper can be downloaded [here](https://download.slock.it/public/DAO/WhitePaper.pdf).

Slock.it UG will soon make the Ethereum Computer proposal to the DAO available to the public. Once ready, it will be posted on this website.


### What are you trying to achieve?

Our mission is to build the future infrastructure of the sharing economy by enabling anyone to rent, sell or share anything - without middlemen.

Slock.it strives to improve the experience of sharing items by:

- Making trusting the other party as unnecessary as possible
- Handling secure Peer-to-Peer payments
- Providing a mechanism of deposits, and eventually, full blown insurance
- Freeing the users from having to coordinate with each other to hand over keys
- Enabling both owners and renters to connect each other
- Supporting almost any object including cars, lockers, apartments, sheds, office space, etc.

If it can be locked, it can be Slocked!

For an in-depth introduction to our vision, please see Christoph Jentzsch's [project reveal at Devcon One](https://www.youtube.com/embed/49wHQoJxYPo?start=29s&showinfo=0&rel=0&modestbranding=1).


### Who is the potential market?

Anywhere where there are underused assets such as parked cars, parking slots or temporarily vacant apartments, there is an opportunity to make a profit using Slock.it. Our solution enables both consumers and businesses to turn their assets into income. Almost anything can be retrofitted with a Slock: homes, offices, power tools, bicycles, household electronics, wifi routers, cars, motorcycles and of course lockers.

The sharing economy has created [17](http://venturebeat.com/2015/06/04/the-sharing-economy-has-created-17-billion-dollar-companies-and-10-unicorns/) different billion-dollar companies with 60,000 employees. The sector has received close to $15 billion in funding so far and its global yearly revenue is projected to reach $335 billion by 2025 (source: [PWC](https://www.pwc.com/us/en/technology/publications/assets/pwc-consumer-intelligence-series-the-sharing-economy.pdf)).

We believe that very soon, cars will be available for rent in the streets of every city, Airbnbs will be fully automated, and small business owners will prefer to rent private work spaces on demand rather than commit to complex leases. Owners in a sharing economy become both consumers and producers, leveraging Slocks to earn an income without losing revenue to a third party.

The millennials' philosophy is fast becoming "If you can rent it, why own it". 66% of the world is willing to share or rent their personal assets for financial gain, and that figure is as high as [94%](http://www.nielsen.com/content/dam/nielsenglobal/apac/docs/reports/2014/Nielsen-Global-Share-Community-Report.pdf) in China. We believe Slock.it is uniquely placed to address those needs worldwide, today.


### Who are Slock.it's potential partners?

We are have secured strategic partnerships with Ubuntu, Samsung, RWE, Shapeshift, SafeShare and IPFS. We are currently reaching out to a number of further partners, in particular:

- Sharing economy insurance providers
- Manufacturers of smart locks for the home and offices
- Manufacturers of electronic bike locks
- Real estate companies investing in smart homes
- Hotels and BnBs
- Network and operating systems developers
- Other Ethereum and cryptocurrency businesses


### Is Slock.it open source?

As the Service Provider for the DAO, Slock.it UG will make all the code, the smart contracts, user interfaces, mobile apps, and everything forming the DAO and the output of all the DAO commissioned worked free and open source, for anyone to use and re-purpose. We'll not only make these things public, we'll also do everything in our power to see companies other than us develop Slock.it compatible products, as we are keen to see the ecosystem grow beyond what we have started.


### What's in it for Slock.it UG then?

At the end of the the DAO token sale, Slock.it UG will become the DAO's default Service Provider. Slock.it UG is a for profit company, and the DAO will be one of its clients. It's critical for us to align incentives between the DAO and our company, so you can expect a symbiotic relationship: what we will work on privately should also benefit the ecosystem as a whole. For example, Slock.it UG could engage in partnerships with lock manufacturers, consult for real estate companies building smart homes, integrate the Slock.it API at part of popular smart objects, work with banks for Slocks to accept fiat payments, etc. 


### Can I help with anything?

Yes, it's an open source project and everyone is encouraged to participate in any way they can. We're currently trialling a volunteer program in the #communityorganizers of our [Slack](http://slock.it:3000/).

Things we could use help with include:

- Reviewing and contributing code on [github](https://github.com/Slockit/) (it's an open source project after all!)
- Translating the site, the whitepaper, the videos and the apps into your native language
- Introduce Slock.it UG to partners with a view to integrate new connected products
- Introduce Slock.it at meetups
- Testing prototype hardware

To join, simply request access to our [chat room](http://slock.it:3000/).





## How it works

### What are 'Slocks'?

Slocks are real-world physical objects that can be controlled by the blockchain. 'Slock' is a porte-manteau of 'Smart, Safe and Secure Lock'. Any object supporting ZigBee, Z-Wave, Bluetooth LE or Wi-Fi can already be used as a Slock thanks to our first product, the [Ethereum Computer](/ethereum_computer.html). When it comes to powering up a ‘dumb’ object, it will be a case of retrofitting it using smart plugs.


### How do Slocks work?

The owner of a Slock sets a deposit amount (if needed) and a price for using the item. Users can find the Slock using the mobile app and then make a payment on the Ethereum blockchain, thereby gaining permission to open or close that Slock with their smart phone.

An (optional) deposit is held as collateral in a smart contract until the user returns the item. The smart contract is automatically enforced, with the deposit returned to the user minus the cost of the rental, which in turn will be automatically disbursed to the owner of the Slock.

We're working with our partner [SafeShare](http://www.safeshareinsurance.com/), to provide ad-hoc insurance where a deposit wouldn't be appropriate.

All of this happens without any assistance from a third-party. 


### Will users have to pay every time they use a Slock?

They won't have to, as only renting access to the lock costs money. Any active user (which could also include the owner) only need to send [Whisper](https://github.com/ethereum/wiki/wiki/Whisper-Overview)-signed messages (which do not cost anything) to open or close the Slock.

Furthermore, the owner of the Slock can set the price to use the Slock to 0 while maintaining a deposit amount, and remotely share any item they want, enabling a trustless Sharing Economy.

### Will users be able to use a debit or credit card to open a Slock?

We're currently approaching our partners and various financial institutions to try and make this a reality.


### Aren't the Slocks going to get vandalized?

Of course some will, as Slocks aren't a panacea against theft or damage. What Slocks can do that traditional locks cannot, is provide an insurance option 'baked' into the usage contract. 

If no insurance is required in the case of lower value or cumbersome items, a basic deposit implementation is provided by default and will suffice.  

For higher value items, thanks to our partner [SafeShare](http://www.safeshareinsurance.com/), we're working towards implementing a universal, on-the-spot insurance where users would pay only for the type of insurance they need, when they need it. The insurance provider will read from the Ethereum blockchain when the objects are rented out, and owners will only pay for the time the property was being rented.


### What happens if there is no power or Internet?

The same thing that would happen if any other smart lock was employed: some will 'fail secure' while others will 'fail safe'. Which mode of operation is used is not determined by the DAO, but instead by the use case and local regulations. For example, fire rated and hotel room doors will probably 'fail safe' while a locker will certainly 'fail secure'.





## The Ethereum Computer


### What exactly is the "Ethereum Computer"?

The "Ethereum Computer" is a consumer electronics product Slock.it UG looks forward to develop on behalf of the DAO. The Ethereum Computer is a small, preconfigured consumer electronic device running an optimized Ethereum blockchain node and a series of decentralized applications.

- The Ethereum Computer is a source of revenue, making it possible to rent access to any space or compatible smart object and accept payments without intermediaries.
- It's the simplest and most secure way to browse exciting new [decentralised applications](http://Đapps.ethercasts.com/) (or ‘Đapps’) from the convenience of a desktop or home theater.
- And it’s also a brilliant development platform, packaging all the software needed to build Ethereum Đapps as part of a straightforward, optimized image.

We want to make the Ethereum Computer the easiest entry point to the world of Slock.it and Ethereum, without having to struggle with setting up a client, buying ether from an exchange or worrying about security updates.



### What could I do with the Ethereum Computer?

- Enable the entire home to communicate with the blockchain: rent out a flat, an office space, access to Wi-Fi hotspots, or share any compatible smart object in range directly and securely.
- Try out new, exciting applications: The Ethereum Computer is a full blown implementation of the Ethereum stack, and therefore can serve any Đapp via HDMI out to a home theater.
- Browse the decentralized web securely: it’s easy to point a browser, mobile phone or tablet to the Ethereum Computer, keeping precious cryptographic keys secure within the confines of the local network.
- Earn a passive income: the Ethereum Computer can be used to run an IPFS node and perhaps receiving rewards for renting unused hard drive space. The Ethereum Computer could also facilitate the creation of "Oracles", earning money by providing physical data to blockchain smart contracts.
- Develop applications with Ethereum! Developers will never have to worry about installation difficulties. We’ll resolve compatibility issues between the various components of the Ethereum 'stack' (Whisper, EVM, Web3.js, Swarm, etc) and will push updates for users to accept only after we have tested the framework top to bottom.
- Get rewarded for helping secure the Ethereum network without having to dedicate larger, more expensive equipment to that task (will be applicable once Ethereum has switched to PoS).



### Will it be hackable/open?

Absolutely. We'll not only make the devkit images publicly available, but also all of the detailed code that went into building the 'stack' so you can modify/improve on the installation. (we already [started](https://blog.slock.it/let-s-play-with-snappy-ethereum-816588198528)). A dedicated hobbyist should be able replicate the Ethereum Computer using off-the-shelf parts without having to buy it directly from a distributor. We want you to be able to experiment!

Furthermore, if any given lock manufacturer wanted to be able to embed the software as part of their own designs, in order to benefit from incremental revenue, then in our view, nothing should get in their way either, as this all ultimately benefits the DAO financially by opening the doors to a larger user base.


### If it's open, won't people be able to bypass the contract system?

All Ethereum Computers, regardless of provenance, will be required to give the percentage reward to the DAO to be part of the DAO's network. 

To not be part of the DAO's network means losing all the advantages of decentralization and economies of scale, namely:
- Efficiency, as the DAO removes the need to host a website, advertise or use payment providers
- Trusted key management on the blockchain without third parties involved
- Transparency: the DAO allows you to always prove that you have the permission to open any given lock
- Stability, as DAO-enabled locks work without any 3rd party involved, and have zero downtime
- The open API for smart contracts
- And of course the device would no longer be searchable in the Ethereum Computer directory of connected things



### When will the Ethereum Computer become available to purchase?

Sometime in 2017, although we anticipate devkits much earlier. Slock.it UG will make a small number of prototypes available to early adopters that can demonstrate an active engagement in the development of related apps and have the intention to deploy these apps on the Ethereum Computer. Applications to receive a prototype can be submitted by <a href="mailto:info@slock.it?subject=Ethereum%20Computer%20Devkit&body=Full%20name:%0ACountry:%0ACity:%0AProject%20Description:">contacting us</a>. 


### Will it be useful for mining?

The Ethereum Computer is a full Ethereum client and therefore perfectly capable to have its mining function enabled. That said, it would not be a good platform to mine on while Ethereum is still using Proof of Work, as its form factor prevents it from having the hashing power GPUs have. The Ethereum Computer will however be a perfectly appropriate platform to help secure the network once Ethereum switches to Proof of Stake, keeping your keys secure as part of a hardened stack.





### How much will the Ethereum Computer cost?

We're still defining the Ethereum Computer cost of productions, as they will be dependent on many factors, including product design (we want the Ethereum Computer to become a worthy conversation piece for your desk). It is our intention to keep it very accessible and we are aiming for an MSRP of roughly USD $99 for the lower end model and USD $199 for the higher end model (pricing may vary by location).
 




## The DAO Token Sale


### When is the DAO token sale?

It will take place in early 2016 and will last roughly a month. There is no defined timeframe besides "Soon". If you'd like to be notified once things are ready, please sign up to our [mailing list](/dao.html). 


### How much will each DAO token cost?

1 ETH for 100 DAO tokens. This was chosen arbitrarily based on community feedback as the [DAO smart contracts](https://github.com/slockit/dao) are flexible enough to accept any denomination. Token will be divisible just like ether. 


### How many DAO token will be created?

The total volume of DAO tokens purchased defines the total volume of DAO tokens in circulation. If 200,000,000 tokens are purchased during the sale, then there will be 200,000,000 tokens created, no more, no less. 


### What will be the minimum purchase

There will be no arbitrary minimum - the smallest purchase will therefore be 1 wei + gas cost of the transaction on the Ethereum network. DAO tokens are divisible just like ether. 


### Will anyone hold 'premined' tokens?

There will be no 'premine' whatsoever, and no preferential assignment to anyone, including ourselves as individuals or Slock.it UG. If members of our team would like to own DAO tokens, they will have to purchase them with their own money: the only tokens in circulation will be the ones purchased during the DAO token sale. 


### Will the DAO token sale accept Bitcoin, Doge, etc.?

Yes, we have partnered with Shapeshift for the DAO token sale to accept most cryptocurrencies in existence, including Ether, Bitcoin, Litecoin, Dogecoin, MaidsafeCoin, StorjcoinX, Bitshares, Ripple, BitUSD, NXT, DASH, CLAMS and many, many others. Prospective DAO token purchasers will benefit from higher limits than the Shapeshift default during the DAO token sale.

For larger purchases (USD 10,000 and above) denominated in cryptocurrencies, we have partnered with both [Bity](https://bity.com/) and [Gatecoin](https://gatecoin.com/).

Note: The DAO is an Ethereum-based entity and therefore 'speaks' only ether - ether will therefore be the simplest and most cost-effective way to participate directly in the DAO.


### Why do a DAO token sale?

A detailed explanation of the DAO model's advantages can be found on our [blog](https://blog.slock.it/daos-or-how-to-replace-both-the-kickstarter-and-token-presale-models-1b2b8898d6e7#.r9of6ntmh). There are however, three main reasons for this choice:

- To be inclusive: we're using smart contracts on the Ethereum blockchain so anyone, anywhere in the world can be empowered to build a new future for the sharing economy, and in exchange for their early help, receive a reward in the form of DAO tokens which hold many benefits.

- To incentivize backers: the funds held by the DAO will never be centrally managed. A reward, expressed as a percentage, will be taken from each profitable rental transaction initiated by the Ethereum Computer and not paid in DAO tokens. These rewards will be sent to the DAO, giving it the option to use the accumulated funds to support its growth, or redistribute them to token holders as dividends.

- To keep governance fair and decentralized: DAO tokens holders will be able to vote on important decisions relating to the management of the DAO, including the power to redistribute its profits amongst themselves.


### What are DAO tokens?

DAO tokens:

- Allow the holder to vote on any expenditure the DAO makes
- Are fully transferable. They can be traded peer to peer or on a exchange.
- Provide access to a portion of the profits (generated by the Slocks), proportionally to how many tokens a participant holds.
- Can be used to open or close Slocks without having to pay a fee to the DAO.


### What if users want to own a Slock outright?

It's possible to avoid paying the per-use fees by opting to pay a one-time deployment fee to the DAO. Note that the amount in question will be determined by the DAO itself as it engages with the Service Provider's contract.


### Can I mine DAO tokens?

No. DAO tokens are used purely to represent the proportion of votes a DAO token holder is entitled to as part of the DAO. If you would like to mine, [ether](https://github.com/ethereum/go-ethereum/wiki/Mining) is a good choice.


### Will I be able to send, receive and exchange DAO tokens?

Yes, there will be functions built into the smart contract to send/receive DAO tokens. Trading peer to peer will be possible from the time the DAO token sale ends. Several exchanges, including [Gatecoin](https://gatecoin.com/) have already expressed interest in listing the DAO tokens as soon as technically possible.


### Will I need to be a programmer to purchase tokens?

No, we want to be inclusive every step of the way so that as many people as possible can participate in this new sharing community. The purchase process will be done entirely online via a simple website. If you already have an ether wallet, you'll be able to use that, or the site will just generate a wallet for you.
 

### Where will the tokens be held?

The tokens will be held safely the DAO's immutable smart contract, the blockchain 'ledger' that tracks who owns what. DAO tokens, like ether or bitcoin, are therefore not 'held' in a wallet - instead, they are manipulated by using private keys that transparently signs transactions to confirm you are the original token holder. It is therefore imperative to carefully secure the Ethereum private keys used during the purchase of DAO tokens.


### Will there be another opportunity to purchase tokens?

There is currently no code in the DAO's smart contract to autostart another funding round. Once launched in early 2016, the DAO will be fully autonomous and decentralized. How it manages itself, including decisions on its finances, is entirely up to 'it'. DAO token holders will hold voting rights, be able to submit proposals, and pass motions, which could include a second round of funding.

This likely would mean the DAO will set a higher price for the new tokens, making existing ones more valuable. This process would be akin to having a series A,B,C, D etc.. in a startup, where series A investors usually gain the most benefit from the series B, C rounds.


### How will the DAO control the funds it receives during the token sale?

The DAO token holders will elect the Service Provider of their choosing, and the conditions under which funds are distributed. These decisions are entirely governed by smart contracts, and accessible through a simple online interface. Video tutorials on how to install the necessary software and taking the most common actions will be made available.


### Is there a minimum goal for the token sale?

Yes. A minimum of 500,000 USD (equivalent at the start of the DAO token sale) is required to build a meaningful DAO and first product. If the minimum is not reached, the exercise will end, and participants in the token sale will be able to request their funds back (denominated in ether). Whether or not the DAO Token Sale is funded is determined in 'real time' by a boolean flag updated at each purchase. 


### Will the DAO token sale accept FIAT currencies?

Not directly. In order to take part, you must use a cryptocurrency. To exchange FIAT for cryptocurrencies you will be able to use our partner [Bity](https://bity.com) as part of a streamlined process or use an exchange such as [Kraken](https://kraken.com). 




## The DAO

### DA.. what?

A Decentralized Autonomous Organization (DAO) is a form of company which operates entirely on the blockchain. The DAO is composed of DAO token holders that can review proposals and cast their votes to elect and direct a Service Provider which will represent them in the physical world. This process is very similar to selecting a vendor or supplier. A DAO is however superior in many respects to a traditional company in the sense that all the decisions it makes are transparent, its finances can be audited by anyone and corruption is impossible.

A primer to the mechanisms powering the DAO can be found on our <a href="https://blog.slock.it/a-primer-to-the-decentralized-autonomous-organization-dao-69fb125bd3cd#.wsxe19yc1" target="_new">blog</a>. The whitepaper can be downloaded from our [website](https://download.slock.it/public/DAO/WhitePaper.pdf). 


### Is this just for geeks?

Definitely not. In order to make decisions, DAO token holders will be able to vote using a straightforward interface using Mist, the Ethereum browser. You'll have to be able to install software on your machine, and use what essentially looks and feel like a website. We will also provide video tutorials explaining most common tasks.


### Will it be a lot of work? 

The proposals to the DAO define how much or how little control over its operational responsibilities the DAO 'outsources' to the Service Provider for each project or product. It can range from an "every little details left to token holders" approach with weekly votes to a "100% hands off" approach equivalent to putting the DAO's trust into the Service Provider capability to execute on the concept. The DAO's underlying code is generic enough to support both.

The proposal submitted by Slock.it UG will give operational control over to the Service Provider but will do so under a payment schedule executed in monthly installments so that backers keep control over their funds at all times. The community agrees it represents a good middle ground, and looks forward to experiment with more complex governance models in the future.


### What can the DAO do exactly?

The DAO can choose a Service Provider to implement a technology or develop a product by signing a smart contract. The smart contract specifies the terms of the relationship between the DAO and its Service Provider.

Once the Service Provider's proposal has been approved, the DAO can call functions on this smart contract, setting the values of operating parameters. In our case, it could be setting what percentage of each Ethereum Computer transaction is used to further fund the DAO, or what milestones have to be reached before the Service Provider receives certain payments.

What parameters are available depend on the Service Provider's smart contract and can range from a 'hands off' approach to having the DAO hold complete operational control.


### In practice, what will happen after the DAO token sale? 

The default Service Provider Slock.it UG will submit a proposal to develop the Ethereum Computer and its ecosystem in the form of a smart contract. The DAO will then vote on this proposal and, if accepted, interact with the smart contract.


### What will the first proposal to the DAO include?

We'll soon make public the terms of the smart contract we intend to sign with the DAO. This detailed proposal will include a complete scope of work including Product Strategy, Hardware, Software, Marketing, Distribution, Education, Staffing, Communication and Licensing. All of it will be first distributed in plain English for the convenience of prospective participants.


### Will there be further proposals?

Of course. No business can predict the future, not even the DAO - so it's expected for the DAO to review its engagement with the Service Provider at regular intervals. New proposals can be submitted by the Service Provider at anytime - each of these can be as simple or as complex as needed as the terms are written in a turing complete smart contract language. 


### Will the terms of the proposal be explained in plain English? 

Not only they will be explained in plain English, the smart contract itself can store plain English - holding the Service Provider responsible for its proposal. 


### Can the DAO fire the Service Provider?

Of course. Proposals will usually include a total amount (say, USD 5M to complete project A), an initial deposit (USD 1M to bootstrap project A) and a monthly payment (for example, USD 200K / month for 20 months). At anytime, the DAO can stop the regular payments if it is dissatisfied by the Service Provider, effectively firing it. 

 We believe a relationship whereby the DAO stays in control of its funds is actually more beneficial to both parties than a traditional token sale where the Service Provider retains 100% of the funds. 


### How will voting take place?

The voting will take place via the [official Ethereum GUI wallet](https://github.com/ethereum/mist/releases), through an automatically generated HTML interface. Once [Mist](https://www.youtube.com/watch?v=IgNjs_WaFSc), the official Ethereum Đapp browser, is released, the DAO will make use of a completely customized Đapp accessible via


### How can the DAO protect its funds from ether's volatility?

The DAO could enter into a hedging contract to protect its funds from ether's volatility. This contract would be provided by the Service Provider as part of a new proposal. 


### Why doesn't Slock.it UG raise money through a direct crowdsale instead?

Because we believe DAOs are the future of how businesses will be structured. A DAO will provide much greater security and transparency than a traditional token sale token holders will stay in control of the funds even after the token sale has ended. DAOs also bring about open governance by allowing any DAO token holder to vote on all major business decisions.


### Who owns the intellectual property created as part of the project?

This depends entirely on the terms of the proposal from the Service Provider - and then it's up to the DAO to approve these terms or not. 

In the context of the proposal Slock.it UG will make to the DAO with regards to the development of the Ethereum Computer, this will state that all the code and design that form the output of the work will be licensed as freely as possible, under the LGPL. 

Our opinion - reflected in the proposal terms - is that it's in the DAOs financial advantage to see both the software and the hardware distributed as widely as possible, in order to benefit from the largest user base possible, as each subsequently deployed Ethereum Computer represents potential incremental revenue to the DAO.


### How often can the DAO change Service Provider?

At anytime and as often as it sees fit. 


### What is the process for selecting a new Service Provider?

Changing the Service Provider takes the form of a proposal with a special flag. Votes on changing the Service Provider take place in two steps. The first, an informal vote on whether the DAO would like to switch Service Provider or not. The second, a confirmation vote to give a chance to participants to confirm the result of the first vote, or a chance for the minority to ‘split’ the DAO into two and retain control over their funds.


### Would I still be entitled to my rewards after a split?

Yes. If a split occurs, a new DAO is created and both DAOs would continue to operate, each with their own tokens, and each with a different Service Provider. This would be the equivalent of a large company splitting into two. The rewards for projects already funded by the DAO are also split and fairly distributed between the DAOs. Of course, projects funded after the split will only pay out rewards to their respective DAO.


### What's a 51% attack, and how do you prevent it?

In the old DAO model, if someone was to acquire 51% of the DAO tokens, they could vote themselves as the Service Provider, and then send 100% of the funds to their own account. In order to prevent this, the DAO is able to split itself proportionally to the vote results, leaving the attacker with their funds and the rest of the participants in control of their own funds. Because of this mechanism renders the attack unprofitable, so there is no incentive to execute it. This originates a blog post by Vitalik Buterin on [The Subjectivity / Exploitability Tradeoff](https://blog.ethereum.org/2015/02/14/subjectivity).*


### Why is there only a single Service Provider at any given time?

For safety reasons. In order to prevent a 51% attack, we needed to introduce the rule that the DAO may split in case there is no mutual agreement on a selecting a Service Provider, which in turn removes any incentive to even attempt to bring about such an attack. Having room for more than a single Service Provider would negate this fail-safe. The DAO can still send funds directly to other parties, but only to parties that the Service Provider has verified and added to a whitelist of permitted payees. 


### Why did you choose to abstract the operational parameters of the DAO?

You might wonder why the operational parameters of the DAO have been abstracted as part of a series of smart contracts between the DAO and its Service Provider. This is because the DAO will hold 100% of its funds from day one and had to be made immutable code-wise, while at the same time needed to retain enough flexibility to hire and fire Service Providers. 

Using this model we are able to guarantee that the core DAO code itself (the part that holds the funds) will rarely, if ever need to be updated. To keep adapting rapidly to market changes, the DAO will vote on proposals and could even change Service Providers. This means the DAO will still be able to not only affect the operational parameters of its relationships with suppliers, but also completely change business models if desired.


### Where will proposals and smart contract interactions be discussed?

Both will be discussed in our [Slack chat room](http://Slock.it:3000/), while voting will be done entirely on the blockchain.



