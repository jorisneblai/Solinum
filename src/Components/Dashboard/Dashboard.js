import React, { useState } from 'react';
import Form from '../Form/Form';
import PoiList from '../PoiList/PoiList';

const CONTRIBUTIONS_SEED = [
    { id: 1, name: 'Emmaüs Beauté & Bien-être 10ème', number: '179', street: 'Quai de Valmy', zip: '75010', city: 'Paris', type: 'douche', status: 'En ligne', state: "Validé" },
    { id: 2, name: 'Bains-douches Meaux', number: '18', street: 'Rue de Meaux', zip: '75019', city: 'Paris', type: 'douche', status: 'En ligne', state: "Validé" },
    { id: 3, name: 'Entraide et partage avec les sans-logis (EPALSL)', number: '22', street: 'Rue de Sainte-Marthe', zip: '75010', city: 'Paris', type: 'douche', status: 'En ligne', state: "Validé" },
    { id: 4, name: 'Paris WiFi 1605', number: '', street: 'Place du 11-Novembre-1918', zip: '75010', city: 'Paris', type: 'Wi-Fi', status: 'En ligne', state: "Validé" },
    { id: 5, name: 'ESI La Halle Saint-Didier', number: '23', street: 'Rue Mesnil', zip: '75116', city: 'Paris', type: 'Wi-Fi', status: 'En ligne', state: "Validé" },
    { id: 6, name: 'Itinérances', number: '61', street: 'Boulevard de Magenta', zip: '75010', city: 'Paris', type: 'distribution', status: 'En ligne', state: "Validé" },
];

const Dashboard = () => {
    const [contributions, setContributions] = useState(CONTRIBUTIONS_SEED);
    const [showModeration, setShowModeration] = useState(false);
    const [selectedContributions, setSelectedContributions] = useState([]);

    const onFormSubmit = (newContrib) => {
        newContrib.id = (contributions[contributions.length -1].id) + 1;
        let encodedAddress = encodeURIComponent(`${newContrib.number} ${newContrib.street} ${newContrib.zip} ${newContrib.city}`)
        fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyAkiSxJt9c0ArgJqVd77DG8sjWho8ydRlU`)
            .then((response) => response.json())
            .then((data) => {
                newContrib.lat = data.results[0].geometry.location.lat; 
                newContrib.lng = data.results[0].geometry.location.lng
            });
        
        setContributions([...CONTRIBUTIONS_SEED, newContrib])
    }

    const onContributionSelect = (selectedContributions) => {
        if (selectedContributions.length === 0) { 
            setSelectedContributions([]);
            setShowModeration(false) 
        } else {
            setSelectedContributions(selectedContributions);
            setShowModeration(true);
        }
    }

    const toggleContributionStatus = () => {
        let editedContributions = selectedContributions.map(contribution => {
            if (contribution.status === 'En ligne') { 
                contribution.status = 'Brouillon' 
                return contribution;
            } 
            if (contribution.status === 'Brouillon') { 
                contribution.status = 'En ligne'
                return contribution;
            }
        })

        let updatedContributions = new Set([...contributions, ...editedContributions]);

        setContributions([...updatedContributions]);
        setSelectedContributions([]);
        setShowModeration(false);
    }

    const addInformationNeededStatus = () => {
        selectedContributions.forEach(contribution => contribution.state = "Besoin d'information");
    }

    return (
        <main className="dashboard">
            <Form 
                handleSubmit={onFormSubmit} 
            />
            <PoiList 
                contributions={contributions} 
                onSelect={onContributionSelect} 
                isModerationOn={showModeration} 
                onToggleStatus={toggleContributionStatus}
                onInformationNeeded={addInformationNeededStatus}
            />
        </main>
    )
}

export default Dashboard;