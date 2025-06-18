document.addEventListener('DOMContentLoaded', () => {
    const linkListDiv = document.getElementById('link-list');
    const noLinksMessage = document.querySelector('.no-links-message');

    // --- HIER TRÄGST DU DEINE 8 LINKS EIN ---
    // Jeder Eintrag sollte Name, eine kurze Beschreibung, die URL und eine Info zur Spende enthalten.
    const charitableLinks = [
        {
            name: "Greatergood",

            url: "https://greatergood.com/clicktogive/ggc/home",
            donationInfo: "Various different donation causes."
        },
        {
            name: "MaxImpactSearch",

            url: "https://llarryyllarryy.github.io/Max-Impact-Search/",
            donationInfo: "Do good with your search queries."
        },
        {
            name: "Barkingmad",
  
            url: "https://barkingmad.co.za/click-to-feed-2019-2/",
            donationInfo: "Support Pets 1."
        },
        {
            name: "Freekibble",
  
            url: "https://www.freekibble.com/",
            donationInfo: "Support Pets 2."
        },
        {
            name: "Freetheocean",
        
            url: "https://www.freetheocean.com/",
            donationInfo: "Remove Plastic out of the Ocean."
        },
        {
            name: "Brotherearth",
   
            url: "https://www.brotherearth.com/e/click-donation/", // Beispiel: Eine Website, die Klicks monetarisiert
            donationInfo: "Environmental Protection."
        },
        {
            name: "Arab",
     
            url: "https://arab.org/click-to-help/", // Ersetze dies durch einen echten Partnerlink!
            donationInfo: "Support charity for people."
        },
        {
            name: "Animalwebaction",
            
            url: "https://www.animalwebaction.com/en/collectes/12421/message/", // Ersetze dies durch einen echten Partnerlink!
            donationInfo: "Mainly supporting animals."
        }
    ];

    function createLinkItem(link) {
        const item = document.createElement('div');
        item.classList.add('link-item');

        const contentDiv = document.createElement('div');
        contentDiv.classList.add('link-content');

        const title = document.createElement('h3');
        title.textContent = link.name;
        contentDiv.appendChild(title);

        const description = document.createElement('p');
        description.textContent = link.description;
        contentDiv.appendChild(description);

        const donationDetail = document.createElement('p');
        donationDetail.classList.add('donation-detail');
        donationDetail.textContent = `Donation-Info: ${link.donationInfo}`;
        contentDiv.appendChild(donationDetail);

        item.appendChild(contentDiv);

        const linkButton = document.createElement('a');
        linkButton.href = link.url;
        linkButton.target = "_blank"; // Öffnet in neuem Tab
        linkButton.rel = "noopener noreferrer"; // Sicherheit
        linkButton.classList.add('button');
        linkButton.textContent = "Do good now";
        item.appendChild(linkButton);

        return item;
    }

    // Die Linkliste befüllen (nur die ersten 8 Links, falls mehr im Array sind)
    if (charitableLinks.length > 0) {
        const linksToDisplay = charitableLinks.slice(0, 8); // Beschränkt auf max. 8 Links
        linksToDisplay.forEach(link => {
            const item = createLinkItem(link);
            linkListDiv.appendChild(item);
        });
        noLinksMessage.style.display = 'none';
    } else {
        noLinksMessage.style.display = 'block';
    }
});