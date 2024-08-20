import React, { createContext} from 'react'

export const MyContext = createContext();

export const ContextProvider = ({ children }) => {

    const activityObject = {
        'limuru-ymca-visit': {
          id: "1",
          title: 'Visit to Limuru YMCA Center',
          images: ['/limuru-ymca/5.jpg','/limuru-ymca/4.jpg','/limuru-ymca/6.jpg','/limuru-ymca/7.jpg','/limuru-ymca/15.jpg','/limuru-ymca/17.jpg','/limuru-ymca/19.jpg','/limuru-ymca/20.jpg','/limuru-ymca/31.jpg','/limuru-ymca/37.jpg','/limuru-ymca/38.jpg','/limuru-ymca/43.jpg'],
          description: 'Environmental conservation and facility improvement at Limuru YMCA Center.',
          date: "02.02.2012",
          author: "PCP Anthony Muchiri & PRO Perpetual Muriuki",
          content: [
            "On the 2nd of February 2012, the Nairobi Y’s Men Club embarked on a journey to the Limuru YMCA Center with the goal of contributing to environmental conservation and improving the center's facilities. The day's activities included tree planting and giving the center a new and brighter look by painting one of the tuition blocks. In addition to this, the club generously donated paint to the center for the painting of other blocks, ensuring the center could continue enhancing its appearance.",
            "The visit to Limuru was an eye-opener, revealing the vastness and richness of the 70-acre farm owned by the YMCA. The farm, teeming with various agricultural activities including horticulture, animal husbandry, and cash crops, also serves as a teaching and learning institution. The fresh air and beautiful scenery, highlighted by a 60-year-old Mugumo tree, made the visit even more memorable.",
            "After touring the school, the Y's Men got to work. The tree planting was led by Mr. CP Muchiri, who enthusiastically planted the first tree—a Nandi Flame. A light-hearted moment ensued when Mr. CP humorously attempted to name the tree with a made-up botanical name, much to the amusement of everyone present.",
            "Following the work session, the group enjoyed a meal together. Initially, there were concerns about whether the promised nyama choma would be available, but these were quickly dispelled upon arrival at the beach in Thika County, where a feast awaited them. The spread included not only grilled meat but also boiled, baked, and even muturas.",
            "The day continued with a series of fun activities, including acquiring beach nicknames, engaging in a brain teaser session, and participating in various games. The camaraderie and joyful spirit were evident throughout the event, making it a day to remember.",
            "The following day, some members of the Y’s Men Club were honored to attend and witness the chartering of two youth clubs, KIMC and Utalii, further extending the spirit of service and community engagement.",
            "The Nairobi Y’s Men Club looks forward to more such events that combine service, learning, and fellowship."
          ]
        },
        '15th-Africa-South-East-Regional-Convention-Mukono-Uganda': {
          id: "2",
          title: '15th ASE Regional Convention - Mukono, Uganda',
          images: ['/rc-2012/52.jpg','/rc-2012/49.jpg','/rc-2012/50.jpg','/rc-2012/51.jpg','/rc-2012/53.jpg','/rc-2012/54.jpg','/rc-2012/55.jpg','/rc-2012/56.jpg','/rc-2012/57.jpg'],
          description: 'A memorable journey to the Mukono Regional Convention.',
          date: "03.04.2012",
          content: [
            "The journey to the 15th Africa South East Regional Convention in Mukono, Uganda, was one to remember for the Y's Men of Kenya District. On Friday, April 3rd, 2012, members from Nairobi Y's Men's Club, Thika Y's Men's Club, and Githumu Y's Men gathered at the YMCA Nairobi Central at 7:00 am, eager for the long-anticipated trip. This was no ordinary journey, as the delegation included prominent figures such as IP Finn Pederson, ISG Nishi Takamura, YI Shanna Johnson, PIP Benson Wabule, and RD Tom Waka, making it a high-profile event for any Y's Man.",
            "The planning for the convention had been meticulous, albeit with many confirmations and payments made at the last minute. Nonetheless, the Kenya District was prepared to send a delegation of about 20 Y's Men. The scheduled departure time was 8:00 am, but by 9:30 am, the group was still in Nairobi due to unforeseen delays, including the need to clean the bus. For those unaccustomed to the flexible travel schedules often seen in the region, this was a cause for concern, particularly as the journey would now extend by several hours.",
            "Traveling in a relatively new bus, the group made their way to Naivasha and then Nakuru. Due to road construction on the Nakuru-Kericho route, the group decided to take the longer route via Eldoret. After several hours of travel and a late lunch in Eldoret, the group continued their journey, navigating the congested roads during the evening rush hour. By 7:00 pm, they were still within the outskirts of Eldoret.",
            "The journey became even more challenging as the group missed a crucial turning towards Busia, eventually reaching the border at midnight. Fortunately, prior arrangements made by RD Tom Waka facilitated a smooth border crossing, and the group was soon on Ugandan soil. However, their driver, unfamiliar with the route beyond Eldoret, struggled to navigate the unfamiliar roads at night. The situation was resolved when PCP Kariuki from Thika, an experienced driver, took over the wheel.",
            "After an arduous 15-hour journey with only brief stops, the delegation finally arrived at the Mukono Resort, the convention venue, at 5:30 am on Wednesday morning. Despite the exhaustion from the lengthy trip, the group was ready for the RD training session scheduled for 9:00 am that same morning.",
            "Reflecting on the journey, it was clear that the request for a speed-governed vehicle had significantly slowed their progress, with an average speed of just 64 km/hr. However, this slow pace allowed the foreign tourists among the group to enjoy a comprehensive view of the Kenyan countryside.",
            "Once the convention began, led by RD Tom, the challenges of the journey quickly faded into the background. The event was a resounding success, and the experiences along the way only added to the camaraderie and memories shared by all. While the report does not cover the return journey to Nairobi, it is safe to say that the trip to Mukono was an adventure none would soon forget."
          ]
        },
        'happylife-childrens-home-visit': {
          id: "10",
          title: 'Visit to Happylife Children\'s Home',
          images: ['/happylife/pdgesther.jpg','/happylife/32.jpg','/happylife/33.jpg'],
          description: 'A heartwarming visit to Happylife Children\'s Home, emphasizing the power of love, care, and small acts of kindness.',
          date: "02.05.2010",
          author: "Guest Justus",
          content: [
            'Imagine a place, somewhere beyond our world, where a special committee is in session—the bureau of our UNBORN GENERATION. These unborn sons and daughters gather to decide the kind of world they would want to be born into. Would they choose to be born if they knew they might be abandoned in a cold hospital bed or left alone on a roadside? Many might opt to stay in the peaceful world of the unborn.',
            'But there’s a German proverb that says, "True charity looks at the need, not the cause." This sentiment is crucial when visiting and interacting with the children at Happylife Children’s Home—children who were abandoned at birth, yet found hope and care in this loving environment.',
            'On a calm afternoon, Sunday, May 2nd, 2016, we visited Happylife Children’s Home, located just off Thika Road. This serene place is home to nearly forty boys and girls, who, at one point, were abandoned by their parents. For many, this is the only home they have ever known. The glittering hopes in their eyes reveal unexploited potential and rescued dreams, making you feel deeply moved.',
            'What we brought to these children may seem small in comparison to their ever-growing needs. Yet, it is important to remember that we are here for them, just as God, the Father to us all, is. While our contributions may feel like a drop in the ocean, that drop is essential, for the ocean would be less without it. We don’t give out of abundance; we give because we have the calling.',
            'We extend our heartfelt gratitude to everyone who contributed to making the visit to Happylife a success. Besides material gifts, we shared something even more valuable—our LOVE. This message was clearly understood, from the oldest child, about seven years old, to the youngest, barely a month old. When a one-month-old girl holds your hand in a firm grip and looks into your eyes as if to say, "I am glad you are here," it is a powerful communication that words cannot capture.',
            'As we left, the youngest children cried, and some of the older ones insisted on leaving with us, a testament to the instant and strong bond we had formed. This visit wasn’t the end but a wake-up call. Let it be our mission to continue touching lives, bringing smiles to faces in our own small ways. We do this not out of abundance, but because we have the calling.',
            'I conclude with a simple poem titled "GIVING":',
            '',
            '',
            '"Rotary is a wheel forever turning"',
            '"One’s generosity comes round again"',
            '"The more one gives"',
            '"The more gifts one receives"',
            '"Charity should make the giver sing"',
            '"Happy in the undertow of sharing"',
            '"A gift not given out of duty"',
            '"Is priceless in pleasure and beauty."'
          ]
        },
        'bloodlife-initiative': {
          id: "11",
          title: 'Bloodlife Initiative',
          images: ['/bloodline.png'],
          description: 'A community service activity by Nairobi Y’s Men’s Club in partnership with Bloodlife Initiative – Kenya, raising awareness for blood donation.',
          date: "20.10.2009",
          author: "CS Jean",
          content: [
              'On the 20th of October 2009, members of Nairobi Y’s Men’s Club and friends joined hands with Bloodlife Initiative – Kenya to raise awareness about the critical need for blood donations in the country. Kenya requires 250,000 units of blood annually, yet less than 50% of that is collected, leaving the country unprepared for both daily needs and emergencies.',
              'Despite these alarming statistics, many potential donors in Kenya are unaware of the constant shortage of safe blood in hospitals. To address this, Bloodlife Initiative – Kenya organized a 160km awareness walk from Nakuru to Nairobi, from October 10th to October 20th. This period coincided with the national blood donor week, which features a major campaign to collect blood.',
              'The final day of the walk, October 20th, which is also Kenyatta Day—a national holiday—saw various groups joining Bloodlife Initiative – Kenya in walking according to their blood groups. Among the participants were AAR, Mt Kenya Youth Development Group, Tears Youth Group, YMCA, Nairobi Y’s Men’s Club, Jamia Mosque and the Muslim community, Nairobi Christian Church, Bloodlife Initiative Kenya, Mathare Youth Sports Association, H2O, Mater Hospital, Henry Wanyoike Foundation, Grange Park Water, and several rally drivers.',
              'This collaboration was a worthy cause, with Y’s Men partnering with several local organizations to contribute to a better world for all. Every step taken during the walk symbolized a step toward saving a life—whether it be yours, mine, or that of a friend—because we all need blood!',
              'This partnership exemplified the power of community and collaboration in addressing critical health challenges and ensuring a better future for everyone.'
          ]
        },
        'regional-convention-2010': {
          id: "12",
          title: '13th Regional Convention',
          images: ['/rc-2010.jpg'],
          description: 'The 13th Regional Convention held in April 2010 at Kenya YMCA Central Hostel, bringing together Y’s Men and Y’s Youth from across Africa South East region.',
          date: "16.04.2010",
          author: "IPPCS/IPAS J. Musima",
          content: [
              'The 13th Regional Convention, held in April 2010 at Kenya YMCA Central Hostel, was a resounding success, attracting 63 Y’s Men and Y’s Youth from four countries in the Africa South East region: Kenya, Uganda, Tanzania, and Zambia. The event was graced by the fathers of Y’s Dom in Africa, led by PIP Bebson Wabule, PIVP Stanley Kinyeki, ISD Kinuthia Wamwangi, AP Hiasinti Kilasara, APE Femi Oduntan, and RD Alisala Mulambya.',
              'One of the highlights of the convention was the launch of the book on Y’s Dom in Africa, authored by PIVP Kinyeki. The convention also featured group discussions on key forward plans and international programs. Anchored on the convention theme "Revival for Growth," these discussions provided a valuable platform for members to generate ideas that, if carefully applied, could propel the movements to greater heights in the region and, by extension, to the entire area.',
              'Looking ahead, the next Regional Convention is scheduled to take place in Zambia in April 2011. Members are encouraged to start saving to ensure they do not miss the opportunity to visit this country known for its Copperbelt and to fellowship with Y’s Men there.'
          ]
        },
        'hells-gate-excursion-2010': {
          id: "13",
          title: 'Excursion to Hell\'s Gate - 2010',
          images: ['/hells-gate/1.jpg', '/hells-gate/2.jpg','/hells-gate/3.jpg','/hells-gate/13.png','/hells-gate/14.png','/hells-gate/25.png','/hells-gate/28.png'],
          description: 'An adventurous excursion to Hell\'s Gate in the Great Rift Valley, filled with scenic beauty and unforgettable experiences.',
          date: "13.06.2010",
          author: "Justus/Carol",
          content: [
              'The sun rose cautiously on Sunday, June 13th, as if aware of the intense anticipation inside each of our hearts. While a trip to the Great Rift Valley naturally promises great adventure, the experience we had at Hell’s Gate surpassed all expectations.',
              'No matter how many times one has traveled along the Nairobi-Nakuru Highway, each journey feels like a first, with the beautiful scenery capturing your attention. Our group was no exception, fully absorbed by the lovely escarpment features, the sight of Mount Longonot, and soon enough, we found ourselves in Naivasha.',
              'We entered Hell’s Gate around midday, driving through while watching herds of zebras gracefully grazing. The sight of the lovely gazelles, the famous Fischer’s Tower, and the warthogs was truly exhilarating. But the real adventure was just beginning.',
              'As young and flexible as we all felt, the Hell’s Gate Gorges provided the perfect opportunity to prove it. Opting for the full walk around the gorges turned out to be a thrilling experience. The excitement built until we reached the point where we had to maneuver through steep rocks. This challenging part of the journey tested us all, but deep down, these are the memories we cherish the most.',
              'Special mention goes to Madam Pamela, whose audacity and boldness gave many of us the moral strength to continue. Though some parts were tough, we all managed to complete the journey, thanks in part to Ysman Mugambi, who saved the day with biscuits that gave us the energy to finish the round tour. Our tour guide was also instrumental in helping us through the tricky sections.',
              'After about two hours of incredible adventure in the gorges, we headed to YMCA Naivasha for a refreshing lunch. The climax of our trip was the planting of a tree at the YMCA—a fitting end to a wonderful day. Despite our reluctance to leave this beautiful land, we eventually had to, but we left with hearts full of joy and memories to cherish.'
          ]
        },
        'kereita-forest-tree-planting-2010': {  
          id: "14",
          title: 'Tree Planting at Kereita Forest - 2010',
          images: ['/treeplanting-2010/15.jpg','/treeplanting-2010/30.jpg','/treeplanting-2010/34.jpg'],
          description: 'A significant tree planting activity at Kereita Forest, contributing to environmental conservation and awareness.',
          date: "26.06.2010",
          author: "CS Jean",
          content: [
            'On the 26th of June 2010, 1,000 tree seedlings were planted in Kereita Forest, a beautiful forest located 45 minutes from Nairobi. This forest forms the southern tip of the Aberdares forest, which is an essential water catchment area.',
            'In the past, unsustainable tree felling activities led to significant deforestation in the area. However, Kijabe Environmental Volunteers (KENVO), a local environmental organization, began raising awareness in the community about the importance of preserving their forest. KENVO has worked with government bodies, NGOs, corporate entities, and volunteer organizations to achieve this noble goal.',
            'As part of their community service activities for the 2009 – 2010 calendar, Nairobi Y’s Men’s Club partnered with KENVO and led this tree planting initiative. We were joined by friends of the club, Nairobi Y’s Youth members, and friends, as well as a team from the University of Nairobi. The drive to the forest was filled with breathtaking views of the Great Rift Valley, eventually leading us to this beautiful forest.',
            'Upon arrival, we were welcomed by members of KENVO, volunteers, and community members, as well as participants from two other organizations—Birdlife International and Githunguri Business School—who also joined us in planting trees.',
            'This tree planting activity allowed us to contribute to environmental conservation in line with the theme of the International Convention in Japan—"From our hands we pass nature’s torch." It also provided a platform to raise awareness of the club and the Y’s Men International movement, not only to those who attended the activity but also to many others who supported Nairobi Y’s Men’s Club by sponsoring a tree.'
          ]
        },
        'handing-over-ceremony-2010': {
          id: "15",
          title: 'Handover Ceremony - 2010',
          images: ['/handover-2010/16.png','/handover-2010/17.png'],
          description: 'A memorable handover ceremony marking the transition of club leadership.',
          date: "04.07.2010",
          author: "PDG Esther",
          content: [
            'Sunday, the 4th of July 2010, was a day of handing over and taking over, a moment forever etched in my heart. As the saying goes, "whatever has a beginning must come to an end," so it was with my tenure as your club president. It was a sunny day, unusual for July in Nairobi, which is typically cold. Nairobi Club Y’s Men had turned up in large numbers, joined by youths, friends, and family.',
            'Shalom Hill, located about 20 km from Nairobi in the southern part of the Rift Valley, was the venue for this event. This beautiful retreat site offers a great view of the famous Ngong Hills. The landscape, structures, and overall atmosphere were wonderful.',
            'The program of the day required departure from the Nairobi YMCA at 10:30 am, though some people didn’t keep time. We arrived at Shalom between 12:00 and 1:00 pm, welcomed by the inviting aroma of “nyama choma” and “nyama chemsha.” While it’s not standard to have choma during handovers, thanks to two Y’s Men who donated two goats for the ceremony, we enjoyed this special treat.',
            'The presence of nice carpet grass and swings delighted the kids and adults alike. Some rolled on the grass, others ran after each other with great laughter, and many relaxed in the gazebos scattered around the area, chatting away while waiting for the rest to arrive so we could eat together.',
            'This experience inspired some Y’s Men to consider more Y’s Men family day outs, recognizing it as a great platform for fellowship. After 2 pm, food was served, and we all relished the meat and its accompaniments, some sitting, others standing.',
            'The afternoon program began with Y’s Men’s GRACE, led by IPDG Kaptway. Our MC for the day, Y’s Man Gitahi, took over, guiding us through the introductions and the rest of the activities. Our LTOD, Muchiri, provided an introduction to Y’s Dom, followed by speeches from RDE, IPDG, and IPCP Esther. Esther thanked everyone for the honor of leading the club, enumerating the successes of her term, which would not have been possible without everyone’s input in 2009 – 2010.'
          ]
        },
        "muchiris-wedding": {
          id: "16",
          title: "Muchiri's Wedding",
          images: ['/wedding/30.jpg','/wedding/23.jpg','/wedding/29.jpg'],
          description: 'A memorable handover ceremony marking the transition of club leadership.',
          date: "14.08.2010",
          author: "PCP Muchiri",
          content: [
            'Saturday the 14th of August 2010 was not just another day for the Nairobi Y’smen Club. It was a special day, in that one of their very own was no longer going to live a loner.',
            'The colourful wedding ceremony between Y’sman Anthony Kariuki Muchiri and Pauline Muthoni was held at the Nairobi Baptist Church, Ngong Road. The invited guests were then treated to a sumptuous lunch at the KEMRI graduation grounds.',
            'Despite the month of August having been cold, cloudy and gloomy, the day was sunny and warm. This special day would not have been as colourful and successful were it not for the sacrificial input from the club members. From the very first wedding committee meeting, the club members made it clear that it was going to be "their" wedding. This was even emphasized by the fact that the occasion was one of the scheduled activities on the club’s calendar of activities! The Y’smen also played so many roles on the material day such that they could not go unnoticed.',
            'Starting from the groomsman, coordinators, drivers, ushers, to name but a few roles. It is worth mentioning that the ten Ysmen who had travelled to Yokohama for the International Convention were also part of the action. Mr. & Mrs. Kariuki would like to thank the Nairobi Ysmen Club for the all the support they gave in order to make that day a success.',
            'May the spirit of brotherhood in Ysdom live on!'
          ]
        },
        'handover-ceremony-naivasha=2016': {
          id: "17",
          title: 'Handover Ceremony in Naivasha - 2016',
          images: ['/handover-2016/517.jpg', '/handover-2016/575.jpg', '/handover-2016/576.jpg', '/handover-2016/577.jpg', '/handover-2016/578.jpg', '/handover-2016/586.jpg', '/handover-2016/587.jpg', '/handover-2016/588.jpg', '/handover-2016/589.jpg', '/handover-2016/590.jpg', '/handover-2016/591.jpg', '/handover-2016/592.jpg', '/handover-2016/593.jpg', '/handover-2016/594.jpg', '/handover-2016/595.jpg', '/handover-2016/596.jpg', '/handover-2016/597.jpg', '/handover-2016/598.jpg', '/handover-2016/599.jpg', '/handover-2016/600.jpg', '/handover-2016/601.jpg'],
          author: "Editor",
          description: 'A memorable handover ceremony in Naivasha.',
          date: "22.07.2016",
          content: [
              "On the 22nd of July 2016, the Nairobi Y's Men Club held a grand handover ceremony in the scenic town of Naivasha. The event marked the transition of leadership as the outgoing Immediate Past Club President (IPCP) Morris handed over the reins to the incoming Club President (CP) David Ouma. This significant occasion was not just about the formalities; it was a day filled with joy, fellowship, and 'swallowship'.",
              "The ceremony was graced by a host of invited guests, including dignitaries from fellow Ysmen clubs. Their presence added a touch of prestige and underscored the importance of the event.",
              "The day was carefully planned to blend formal proceedings with light-hearted activities. After the official handover, members and guests engaged in various fun activities. The laughter and shared experiences throughout the day created memories that will last a lifetime.",
              "Fellowship was at the heart of the event, as members took time to reflect on the club's achievements under IPCP Morris's leadership and expressed their excitement for the future under CP David Ouma.",
              "Swallowship was another highlight of the day. The sumptuous food and drinks provided a perfect backdrop for informal discussions and friendly banter.",
              "Overall, the handover ceremony was a resounding success. It was not just a change of leadership but a celebration of the club's continued dedication to its mission and the strong fellowship that binds members together. With CP David Ouma at the helm, the Nairobi Y's Men Club looks forward to another year of impactful service and vibrant community engagement."
          ]
        },
        'kenya-district-sports-day-2016': {
          id: "18",
          title: 'Kenya District Sports Day',
          images: ['/sportsday-2016/527.jpg', '/sportsday-2016/528.jpg', '/sportsday-2016/529.jpg', '/sportsday-2016/604.jpg', '/sportsday-2016/605.jpg', '/sportsday-2016/606.jpg', '/sportsday-2016/607.jpg', '/fellowship.jpg', '/sportsday-2016/609.jpg', '/sportsday-2016/610.jpg', '/sportsday-2016/611.jpg', '/sportsday-2016/612.jpg'],
          description: 'An annual event promoting fitness, fellowship, and unity among Y’s Men across the Kenya District.',
          date: "10.09.2016",
          author: "PDYR James Ndula",
          content: [
              'The Kenya District Sports Day, held on 10th September 2016, was a remarkable event that brought together Y’s Men from across the district under the leadership of the District Governor. The day was filled with activities that promoted fitness, fellowship, and unity among members.',
              'This annual event is a highlight on the Kenya District calendar, providing an opportunity for members to engage in friendly competition while strengthening bonds within the community. For the Nairobi Y’s Men’s Club, the Sports Day was a chance to connect with fellow members from different clubs, fostering a sense of camaraderie and district-wide collaboration.',
              'One of the key moments of the day was the official handover ceremony for the incoming district leadership. The event was particularly special as it drew members from all corners of the district, emphasizing the importance of such gatherings in maintaining a strong and connected Y’s Men’s community. The participation was inclusive, with members of all ages joining in the fun, demonstrating that the games are not just about competition but also about enjoying time together.',
              'The Kenya District Sports Day is open to both members and non-members, providing an excellent platform to introduce others to the Y’s Men’s mission, activities, and values. The 2016 event was no exception, offering a glimpse into the vibrant community spirit that drives the organization.'
          ]
        },
        'shelter-children-home': {
          id: "19",
          title: 'Visit to Shelter Children\'s Home',
          images: ['/shelter/549.jpg', '/shelter/550.jpg', '/shelter/551.jpg', '/shelter/552.jpg', '/shelter/553.jpg', '/shelter/554.jpg', '/shelter/555.jpg', '/shelter/556.jpg', '/shelter/557.jpg', '/shelter/558.jpg', '/shelter/559.jpg', '/shelter/560.jpg', '/shelter/561.jpg'],
          description: 'An annual event promoting fitness, fellowship, and unity among Y’s Men across the Kenya District.',
          date: "03.12.2016",
          author: "CS Lillian Yahuma",
          content: [
            `As part of our community service duty, the Nairobi Ys Men Club organized a visit to Shelter Children's Home located in Kibiku, Ngong. We visited on 03rd December 2016. The Ys men from Nairobi club and other clubs sent their repre- sentatives to be part of this visit. We arrived in good time and we were well received by the family at the home lead by Mrs. Muiruri. We all gathered together and began with introductions then prayer and fol- lowed by entertainment from the children. We all interacted with the children in one way or the other like dancing with them, singing along and doing a few ice breakers with them. Since they had a fund raiser in the afternoon we had very little time with this family and so our activities were also very limited.`,
            `CP Ouma briefly explained who we were and the purpose of our visit. I, as the CSD encouraged the children to work hard and be their best. The director of the home, Mrs. Muiruri on behalf of the home was glad and expressed their sincere gratitude to the Ysmen, family and friends whom she referred to as the friends of the home. We learnt the home has over 180 children both boys and girls, about 8 did their KCSE in 2016 and about 14 did their KCPE in 2016. Mrs. Muiruri informed us, that the children can be adopted or be paid school fees for or meet their dai- ly needs in any given way. she also mentioned that the boys dormitory had burned hence the reason for the harambee (fund-raiser) that afternoon.`,
            `The Y'smen made a cash donation of KES 80,500 clothes, shoes and other materials that would benefit the children. KES 65000 was in cash and the balance of KES 15500 was sent via Mpesa.`,
            `As the Community Service Director, I wish to salute the Thika Y's men, Nairobi South Ys men, Tri- ple Y, The Youth and my own Nairobi Ys men. I want you to know that this service would not have been possible without your participation. I treasure your prayers, contributions and time; it's a true spirit of Y'sdom. I sincerely know that Kisumu and Githumu Ys men would have loved to be part of this but you might have missed the chance but I know next time you will not be left out. Let us Keep doing good especially to the less fortunate in our community for this is the true way of a Y'sman.`,
            `RDE Jean gave a vote of thanks on behalf of Y'smen and one of the ladies from the home also gave a vote of thanks on behalf of shelter home, there- after closed with a word of prayer. Later we had a cup of tea and were free to have a one on one with the kids before we left for the home.`,
            `Lastly, I encourage you to watch this space for an- other community service coming up in 2017. Pre- pare your hearts, mind, time, talent and treasure, will be advising you soon.`
          ]
        },
        'community-service-kibera-2010': {
          id: "20",
          title: 'Visit to Kibera YMCA Primary School',
          images: ['/kibera-ymca/IMG-20240803-WA0009.jpg', '/kibera-ymca/IMG-20240803-WA0010.jpg', '/kibera-ymca/IMG-20240803-WA0011.jpg','/kibera-ymca/IMG-20240803-WA0012.jpg','/kibera-ymca/IMG-20240803-WA0013.jpg','/kibera-ymca/IMG-20240803-WA0014.jpg'],
          description: 'A successful community service project focused on donating sanitary items and educational materials to students in Kibera.',
          date: "07.06.2024",
          author: "RDE Jared Musima",
          content: [
            'The Nairobi Y’s Men’s Club, in partnership with Kendirita Tours and Travel Ltd, successfully implemented a community service project at the Kibera YMCA School and Vocational Training Center on June 7, 2024. The project focused on donating essential sanitary items and educational materials to support the students in their educational journey.',
            'A total of 167 students benefitted from this initiative, receiving much-needed items that will contribute to their health and educational success. The project was a significant effort to address the needs of students in Kibera, one of Nairobi’s largest informal settlements.',
            'The partnership between Kendirita Tours and Travel Ltd and the Nairobi Y’s Men’s Club exemplifies the power of collaboration in making a positive impact on the community. By pooling resources and efforts, the two organizations were able to provide substantial support to the students, ensuring they have the materials necessary for their studies and personal hygiene.',
            'The event was well-received by the students, staff, and the wider community. This project not only provided immediate relief but also emphasized the ongoing commitment of the Nairobi Y’s Men’s Club to uplifting the communities they serve.'
          ]
        }
    };

    const heroSectionContent = [
        { 
          src: "/main.jpg", 
          alt: "main", 
          title: "Welcome to Nairobi Y's Men Club", 
          subtitle: "Serving the community since 1969", 
          text: '"Join us in our mission to make a positive impact."'
        },
        { 
          src: "/fellowship.jpg", 
          alt: "fellowship", 
          title: "Fellowship", 
          subtitle: "Building Strong Bonds", 
          text: '"Creating a community of support and camaraderie."'
        },
        { 
          src: "/tree planting.jpg", 
          alt: "treeplanting", 
          title: "Environmental Conservation", 
          subtitle: "Planting for the Future", 
          text: '"Join our tree planting initiatives and help us create a greener planet."'
        },
        { 
          src: 'IMG-20240716-WA0007.jpg', 
          alt: "tunji", 
          title: "Youth Empowerment", 
          subtitle: "Nurturing Future Leaders", 
          text: '"Empowering the youth through various educational and mentorship programs."'
        }
    ];

    const ourWork = [
        {
          image: '/kibera-ymca/IMG-20240803-WA0009.jpg',
          title: 'Community Service',
          description: "Community service is at the heart of the Nairobi Y's Men Club's mission. We are dedicated to making a positive impact in the lives of those around us through various service projects. Our initiatives include feeding programs for the underprivileged, educational support for local schools, healthcare outreach, and support for vulnerable groups such as orphans and the elderly. In partnership with the YMCA, we extend our reach and resources to implement joint community service programs, such as collaborative youth empowerment projects and shared healthcare initiatives. By addressing the immediate needs of our community, we aim to promote social well-being and foster a sense of unity and cooperation.",
        },
        {
          image: '/tunji.jpeg',
          title: 'Christian Emphasis',
          description: "As part of our commitment to upholding Christian values, the Nairobi Y's Men Club integrates spiritual growth and service into our activities. We organize regular prayer meetings, Bible study sessions, and faith-based discussions that encourage members to deepen their spiritual journey. Our club also partners with local churches to support faith-based community programs, providing spiritual guidance and support to those in need. Through our Christian emphasis, we strive to inspire and nurture a spirit of compassion, love, and service among our members.",
        },
        {
          image: 'IMG-20240716-WA0007.jpg',
          title: 'Training',
          description: "Empowering our members with the right skills and knowledge is a key priority for the Nairobi Y's Men Club. We offer comprehensive training programs designed to enhance leadership, organizational, and community service skills. Our training sessions cover a wide range of topics, including project management, fundraising strategies, and effective communication. By investing in the development of our members, we ensure they are well-equipped to lead and execute impactful initiatives within the community.",
        },
        {
          image: '/treeplanting-2010/15.jpg',
          title: 'Environmental Conservation',
          description: "The Nairobi Y's Men Club is deeply committed to protecting and preserving our natural environment. Our environmental conservation initiatives include organizing tree planting drives, promoting recycling programs, and conducting clean-up campaigns in local communities. We also collaborate with environmental organizations to raise awareness about sustainability and environmental protection. In partnership with the YMCA, we develop and implement environmental education programs for youth, engaging them in hands-on activities and workshops to cultivate a sense of responsibility towards the environment. Through these efforts, we aim to foster a culture of environmental stewardship and ensure a healthier planet for future generations.",
        },
    ];
  

    const activityArray = Object.entries(activityObject).sort((a,b)=> b[1].id - a[1].id)
    const activityDetails = Object.fromEntries(activityArray)

    return (
        <MyContext.Provider value={{activityDetails, heroSectionContent, ourWork}}>
            {children}
        </MyContext.Provider>
    )
}



