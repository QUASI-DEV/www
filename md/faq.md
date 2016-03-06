> Version 1.5

# Slock.it, in-depth
  
> To become part of the conversation, ask questions or receive help, join our [Slack chat room](http://Slock.it:3000/).




## The Project


### Where am I?

Slock.it UG is a German company building the future infrastructure of the collaborative economy. Our first product, the [Ethereum Computer](/ethereum_computer.html), bring blockchain technology to the entire home, making it possible to rent access to any compatible smart object and accept payments without intermediaries. We aim for this product and its ecosystem to be funded by a DAO, a type of digital company where backers benefits financially from the revenue of the products they supported - think of it as a Kickstarter on steroids.

The DAO model is free and open source for anyone to reproduce or study, and our white paper can be downloaded [here](http://j.mp/slockit).

Slock.it UG will soon make its Ethereum Computer proposal to the DAO available to the public. Once ready, it will be posted on this website in .pdf format.


### What are you trying to achieve?

Our mission is to build the future infrastructure of the sharing economy by enabling anyone to rent, sell or share anything - without middlemen.

Slock.it strives to improve the experience of sharing items by:

- Making trusting the other party as unnecessary as possible
- Handling secure Peer-to-Peer payments
- Providing a mechanism of deposits, and eventually, full blown insurance
- Freeing the users from having to coordinate with each other to hand over keys
- Enabling both owners and renters to connect each other
- Supporting almost any objects including cars, lockers, apartments, sheds, office space, etc.

If it can be locked, it can be Slocked!

For an in-depth introduction to our vision, please see Christoph Jentzsch's [project reveal at Devcon One](https://www.youtube.com/embed/49wHQoJxYPo?start=29s&showinfo=0&rel=0&modestbranding=1).


### Who is the potential market?

Anywhere where there are underused assets such as parked cars, parking slots or temporarily vacant apartments, there is an opportunity to make a profit using Slock.it. Our solution enables both consumers and businesses to turn their assets into income. Almost anything can be retrofitted with a Slock: homes, offices, power tools, bicycles, household electronics, wifi routers, cars, motorcycles and of course lockers.

The sharing economy has created [17](http://venturebeat.com/2015/06/04/the-sharing-economy-has-created-17-billion-dollar-companies-and-10-unicorns/) different billion-dollar companies with 60,000 employees. The sector has received close to $15 billion in funding so far and its global yearly revenue is projected to reach $335 billion by 2025 (source: [PWC](https://www.pwc.com/us/en/technology/publications/assets/pwc-consumer-intelligence-series-the-sharing-economy.pdf)).

We believe that very soon, cars will be available for rent in the streets of every city, Airbnbs will be fully automated, and small business owners will prefer to rent private work spaces on demand rather than commit to complex leases. Owners in a sharing economy become both consumers and producers, leveraging Slocks to earn an income without losing revenue to a third party.

The millennials' philosophy is fast becoming "If you can rent it, why own it". 66% of the world is willing to share or rent their personal assets for financial gain, and that figure is as high as [94%](http://www.nielsen.com/content/dam/nielsenglobal/apac/docs/reports/2014/Nielsen-Global-Share-Community-Report.pdf) in China. We believe Slock.it is uniquely placed to address those needs worldwide, today.


### Who are Slock.it's potential partners?

We are currently reaching out to a number of partners, in particular:

- Sharing economy insurance providers
- Manufacturers of smart locks for the home and offices
- Manufacturers of electronic bike locks
- Real estate companies investing in smart homes
- Hotels and BnBs
- Network and operating systems developers
- Other Ethereum and cryptocurrency businesses


### Is Slock.it open source?

As the service provider for the DAO, Slock.it UG will make all the code, the smart contracts, user interfaces, mobile apps, and everything forming the DAO and the output of all the DAO commissioned worked free and open source, for anyone to use and re-purpose. We'll not only make these things public, we'll also do everything in our power to see companies other than us develop Slock.it compatible products, as we are keen to see the ecosystem grow beyond what we started.


### What's in it for Slock.it UG then?

At the end of the the DAO token sale, Slock.it UG will become the DAO's default service provider. Slock.it UG is a for profit company, and the DAO will be one of its clients. It's critical for us to align incentives between the DAO and our company, so you can expect a symbiotic relationship: what we will work on privately should also benefit the Slock.it ecosystem as a whole. For example, Slock.it UG could engage in partnerships with lock manufacturers, consult for real estate companies building smart homes, integrate the Slock.it API at part of popular smart objects, work with banks for Slocks to accept FIAT payments, etc. 


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

'Slock' is a porte-manteau of 'Smart, Safe and Secure Lock'. Any object supporting ZigBee, Z-Wave, Bluetooth LE or Wi-Fi can already be used as a Slock thanks to our first product, the [Ethereum Computer](/ethereum_computer.html). When it comes to powering up a ‘dumb’ object, it will be a case of retrofitting it using smart plugs.


### How do Slocks work?

The owner of a Slock sets a deposit amount (if needed) and a price for using the item. Users can find the Slock using the mobile app and then make a payment on the Ethereum blockchain, thereby gaining permission to open or close that Slock with their smart phone.

An (optional) deposit is held as collateral in a smart contract until the user returns the item. The smart contract is automatically enforced, with the deposit returned to the user minus the cost of the rental, which in turn will be automatically disbursed to the owner of the Slock.

We're working with our partner [SafeShare](http://www.safeshareinsurance.com/), to provide ad-hoc insurance where a deposit wouldn't be appropriate.

All of this happens without any assistance from a third-party. 


### Will users have to pay every time they use a Slock?

They won't have to, as only renting access to the lock costs money. Any active user (which could also include the owner) only need to send [Whisper](https://github.com/ethereum/wiki/wiki/Whisper-Overview)-signed messages (which do not cost anything) to open or close the Slock.


### Will users be able to use a debit or credit card to open a Slock?

We're currently approaching our partners and various financial institutions to try and make this a reality.


### Aren't the Slocks going to get vandalized?

Of course some will, as Slocks aren't a panacea against theft or damage. What Slocks can do that traditional locks cannot, is provide an insurance option 'baked' into the usage contract. 

If no insurance is required in the case of lower value or cumbersome items, a basic deposit implementation is provided by default and will suffice.  

For higher value items, and thanks to our partner [SafeShare](http://www.safeshareinsurance.com/), we're working towards implementing a universal, on-the-spot insurance where users would pay only for the type of insurance they need, when they need it. The insurance provider will read from the Ethereum blockchain when the objects are rented out, and owners will only pay for the time the property was being rented.


### What happens if there is no power or Internet?

The same thing that would happen if any other smart lock was employed: some will 'fail secure' while others will 'fail safe'. Which mode of operation is used is not determined by the DAO, but instead by the use case and local regulations. For example, fire rated and hotel room doors will probably 'fail safe' while a locker will certainly 'fail secure'.





## The Product

### What exactly is the "Ethereum Computer"?

The "Ethereum Computer" is the tentative name for a consumer product Slock.it UG hopes to develop on behalf of the DAO. The Ethereum computer is a tiny, preinstalled, preconfigured home server running an  Ethereum node optimized for the IoT.

- It’s a secure Slock gateway between the web & web3 to your home or small office IoT, communicating wirelessly with your smart objects. 
- It’s the easiest way to browse exciting new [decentralised applications](http://dapps.ethercasts.com/), including Mist.
- And it’s also a brilliant development platform, packaging all the software needed to build Ethereum Dapps as part of a straightforward, optimized image.

We want to make the Ethereum Computer the easiest entry point to the world of Slock.it and Ethereum, without having to struggle with setting up a client, buying ether from an exchange or worrying about security updates.



### What could I do with the Ethereum Computer?

- Enable your entire home to communicate with the blockchain: rent your flat, your office space, access to your Wi-Fi hotspot, or share any Slock.it enabled smart object in range directly and securely
- Try out new, exciting applications: The Ethereum Computer is a full blown implementation of the Ethereum stack, and therefore can serve any Dapp via HDMI out to your home theater.
- Browse web3 securely: you can point your browser, mobile phone or tablet to the Ethereum Computer, and the 3rd party web servers will only be used to serve static HTML assets, while your precious crypto keys will safely stay within the confines of your home.
- Earn a passive income: the Ethereum Computer can be used to run an IPFS node, perhaps even receiving rewards for renting your unused hard drive space. We're also looking at the possibility of letting you use your Ethereum Computer as an Oracle, earning tokens by providing physical data to blockchain smart contracts.
- Develop applications with Ethereum and never have to worry about installation difficulties. We’ll sort out updates and compatibility issues between the various components of the Ethereum 'stack' (Whisper, EVM, Web3.js, Swarm, etc), and will push updates only when we have tested the framework top to bottom.
- Help secure the Ethereum network and get rewarded for it (once Ethereum has switched to PoS), without having to dedicate larger, more expensive and less secure equipment to that task.


### Will it be hackable/open?

Absolutely. We'll not only make the devkit images publicly available, but also all of the detailed code that went into building the 'stack' so you can modify/improve on the installation. (we already [started](https://blog.slock.it/let-s-play-with-snappy-ethereum-816588198528)). A dedicated hacker could completely rebuild an Ethereum Computer from scratch if they wanted to. Having some GPIO available will also allow anyone to connect wired objects to the Ethereum network. We want you to be able to experiment!


### When will the Ethereum Computer become available to purchase?

Sometime in 2017, although we anticipate devkits much earlier as part of an iterative development process. You can register your interest for a devkit by <a href="mailto:info@slock.it?subject=Ethereum%20Computer%20Devkit&body=Full%20name:%0ACountry:%0ACity:%0AProject%20Description:">contacting us</a>. 


### Will it be useful for mining?

The Ethereum Computer is a full Ethereum client and therefore perfectly capable to have its mining function enabled. That said, it would not be a good platform to mine on while Ethereum is still using Proof of Work, as its form factor prevents it from having the hashing power GPUs have. The Ethereum Computer will however be a perfectly appropriate platform to help secure the network once Ethereum switches to Proof of Stake, keeping your keys secure as part of a hardened stack.


### How much will it cost

We're still defining the cost, as it will be dependent on many factors, including product design (we want the Ethereum Computer to become a worthy conversation piece for your desk). It is our intention to keep it very accessible. 





## The DAO Token Sale


### When is the DAO token sale?

It will take place early 2016 and will last roughly a month. Further details will be released as soon as we have them. If you'd like to be notified once things are ready, please sign up to our [mailing list](/dao.html). 


### Why do a DAO token sale?

We're using smart contracts to build on the Ethereum blockchain so people all over the world can be empowered to build a new future for the sharing economy, and in exchange for their early help, they will receive a reward in the form of DAO tokens which hold many benefits.

In order to keep governance fair and decentralized, this DAO will be created so that the funds held by the sharing community will never be centrally managed. A small fee will be taken from the profits of each Slock transaction not paid in DAO tokens. This will be returned to the DAO, giving it the option to reinvest the profits to support its growth.

DAO tokens holders will be able to vote on important decisions relating to the management of the DAO, including the power to redistribute the profits amongst themselves.


### What are DAO tokens?

DAO tokens:

- Give voting rights on important issues in the DAO 
- Can be used to open or close Slocks without having to pay a fee to the DAO
- Can be traded peer to peer or on a exchange
- If voted in by the DAO, provide access to a portion of the profits (generated by the Slocks), proportionally to how many tokens are held


### What if users want to own a Slock outright?

It's possible to avoid paying the per-use fees by opting to pay a one-time deployment fee to the DAO. Note that the amount in question will be determined by the DAO itself as it engages with the service provider.


### Can I mine DAO tokens?

No. DAO tokens are used purely to represent the proportion of votes a DAO token holder is entitled to as part of the DAO. If you would like to mine something, try [ether](https://github.com/ethereum/go-ethereum/wiki/Mining).


### Will I be able to send, receive and exchange DAO tokens?

Yes, there will be functions built into the smart contract to send/receive DAO tokens and trading peer to peer will be possible from day one. 


### Will I need to be a programmer to purchase tokens?

No, we want to be inclusive every step of the way so that as many people as possible can participate in this new sharing community. The purchase process will be done entirely online via a simple website. If you already have an ether wallet, you'll be able to use that, or the site will just generate a wallet for you.
 

### Will anyone hold 'premined' tokens?

No. No one will get an unfair advantage: the only tokens in circulation will be the ones purchased during the DAO token sale.


### Will there be another opportunity to purchase tokens?

There will be only one DAO token sale. Once launched during the course of 2016, the DAO will be fully autonomous and decentralized. How it then manages itself, including decisions on its finances, is entirely up to 'it'. DAO token holders will hold voting rights, be able to submit proposals, and pass motions.


### How will the DAO control the funds it receives during the token sale?

The DAO token holders will elect the service provider of their choosing, and the conditions under which funds are distributed. These decisions are entirely governed by smart contracts, and accessible through a simple online interface.


### Is there a minimum goal for the token sale?

Yes. A minimum of 500,000 USD (equivalent) is required to build a meaningful DAO and first product. If the minimum is not reached, participants in the token sale will be able to request their funds back (denominated in ether).


### Will the DAO token sale accept Bitcoin, Doge, etc.?

Yes, we have partnered with Shapeshift so that the DAO token sale will accept most cryptocurrencies in existence, including Ether, Bitcoin, Litecoin, Dogecoin, MaidsafeCoin, StorjcoinX, Bitshares, Ripple, BitUSD, NXT, DASH, CLAMS and many, many others.

For larger purchases denominated in cryptocurrencies, we are currently looking at partnering directly with exchanges. 


### Will the DAO token sale accept FIAT currencies?

Not directly. In order to take part, you must use a cryptocurrency. To exchange FIAT for cryptocurrencies you could use an exchange such as [Kraken](https://kraken.com). We are currently working with exchange to see if we could streamline this process. 




## The DAO

### DA.. what?

A Decentralized Autonomous Organization (DAO) is a form of company which operates entirely on the blockchain. In this case, the DAO is composed of DAO token holders that can review proposals and cast their votes to elect and direct a service provider which will represent them in the physical world. This process is very similar to selecting a vendor or supplier. A DAO is however superior in many respects to a traditional company in the sense that all the decisions it makes are transparent, its finances can be audited by anyone and corruption is impossible.


### Is this just for geeks?

Definitely not. In order to make decisions, DAO token holders will be able to vote using a straightforward interface using Mist, the Ethereum browser. You'll have to be able to install software on your machine, and use what essentially looks and feel like a website. That's it.


### What can the DAO do exactly?

The DAO can choose a service provider to implement a technology or develop a product, either by sending funds directly or signing a smart contract. The smart contract specifies the terms of the relationship between the DAO and its service provider.

Once a service provider has been selected, the DAO can call functions on the service provider smart contract, setting the values of operating parameters which could include, for example, what percentage of each Slock transaction is used to further fund the DAO, or what milestones have to be reached before the service provider receives certain payments.

What parameters are available depend on the service provider's smart contract and can range from a 'hands off' approach to having the DAO hold complete operational control.


### In practice, what will happen after the DAO token sale? 

The default service provider Slock.it UG will submit a proposal to develop products and services (including of course the Ethereum Computer) in the form of a smart contract. The DAO can then vote on this proposal and, if accepted, interact with the smart contract using Mist, the Ethereum browser. 


### I'm not a programmer - what will the first proposal to the DAO include?

Ahead of the token sale, we'll make public on our blog the terms of the smart contract or smart contracts we could sign off with the DAO. This proposal will include tutorials, a whitepaper, a FAQ, and 'how to' videos.


### Will there be further proposals?

Of course. No business can predict the future, not even the DAO - so it's expected for the DAO to review its engagement with the service provider at regular intervals. New proposals can be submitted by the service provider at anytime - each of these can be as simple or as complex as needed as the terms are written in a turing complete smart contract language. 


### Will the terms of the proposal be explained in plain English? 

Not only they will be explained in plain English, the smart contract itself can store plain English - holding the service provider responsible for its proposal. 


### Can the DAO fire the service provider?

Of course. Proposals will usually include a total amount (say, USD 1m to complete project A), an initial deposit (USD 300k to bootstrap project A) and a monthly payment (for example, USD 50K / month for 24 months). At anytime, the DAO can stop the regular payments if it is dissatisfied by the service provider, effectively firing it. 


### Does this mean you created a model where you can be fired yourself?

Yes, absolutely. We believe a relationship whereby the DAO stays in control of its funds is actually more beneficial to both parties than a traditional token sale where the service provider retains 100% of the funds. 


### How will voting take place?

Version 1 of the DAO will be activated at the end of the token sale to hold the funds and allow basic voting. The voting will take place via the [official Ethereum GUI wallet](https://github.com/ethereum/mist/releases), through an automatically generated HTML interface. Version 2 of the DAO (to be released at the launch of the project) will make use of a completely customized Dapp accessible via [Mist](https://www.youtube.com/watch?v=IgNjs_WaFSc), the official Ethereum Dapp browser.


### How can the DAO protect its funds from ether's volatility?

The DAO could enter into a hedging contract to protect its funds from ether's volatility. This contract would be provided by the service provider as part of a new proposal.


### Why doesn't Slock.it UG raise money through a direct crowdsale instead?

Because we believe DAOs are the future of how businesses will be structured. A DAO will provide much greater security and transparency than a traditional token sale as investors will stay in control of the funds even after the token sale has ended. DAOs also bring about open governance by allowing any DAO token holder to vote on all major business decisions.


### How often can the DAO change service provider?

At anytime and as often as it sees fit. 


### Where will proposals and smart contract interactions be discussed?
Both will be discussed in our [Slack chat room](http://Slock.it:3000/), while voting will be done entirely on the blockchain.




## Advanced topics

*Note: the following section of the document is technical and covers advanced topics that originate from Vitalik Buterin's blog post on [The Subjectivity / Exploitability Tradeoff](https://blog.ethereum.org/2015/02/14/subjectivity).*

### What's a 51% attack, and how do you prevent it?

If someone was to acquire 51% of the DAO tokens, they could vote themselves as the service provider, and then send 100% of the funds to their own account. In order to prevent this, the DAO is able to split itself proportionally to the vote results, leaving the attacker with their funds and the rest of the participants in control of their own. Because of this mechanism, there is no incentive to execute such an attack, since it is not only unprofitable, but the attacker would also be stuck with worthless tokens from their own fork of the DAO.


### Why is there only a single service provider at any given time?

For safety reasons. In order to prevent a 51% attack, we needed to introduce the rule that the DAO may split up in case there is no mutual agreement on a selecting a service provider, which in turn removes any incentive to even attempt to bring about such an attack. Having room for more than a single service provider would negate this fail-safe.


### What is the process for selecting a new service provider?

This takes place in two steps. The first step is a simple vote on keeping the existing service provider or choosing a new one. The second step is a confirmation vote, where the minority, having lost the previous vote but comfortable the winner is indeed not an attacker, can vote alongside the majority in order to avoid splitting the DAO. On the other hand, if the minority does suspects a 51% attack, it's important for it to keep its ability to stick with its decision to split the DAO, effectively rendering any attack unprofitable.


### I thought DAOs were fully automated, why do you call this a DAO?

Slock.it UG is set on building a fully automated DAO, that is, the first proposal to the DAO will include an proposal relating to the continuous improvement of the DAO's own codebase. 

Version 1 of the DAO, while not fully automated is fully autonomous in the sense that the DAO token holders will be 100% in control of it and we as the code creators will have no influence over it. Thisl represents a considerably better process than a traditional 'crypto kickstarter'. Longer term, a Version 2 could see the percentage of transactions going back to the DAO to become dynamic and orchestrated by a narrow AI, lowering the fee as more Slocks are deployed, or raising it when in need of further funds - this effectively would automate the decentralized organization. Such a switch would however first require a vote by the DAO token holders. 


### Why did you choose to abstract the operational parameters of the DAO?

You might wonder why the operational parameters of the DAO have been abstracted as part of a series of smart contract between the DAO and its service provider. This is because the DAO will hold 100% of its funds from day one and had to be made immutable code-wise, while at the same time needed to retain enough flexibility to hire and fire service providers. 

Using this model we are able to guarantee that the core DAO code itself (the part that holds the funds) will rarely, if ever need to be updated. To keep adapting rapidly to market changes, the DAO will vote on proposals and could even change service providers. This means the DAO will still be able to not only affect the operational parameters of its relationships with suppliers, but also completely change business models if needed.



