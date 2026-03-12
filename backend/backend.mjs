import PocketBase from 'pocketbase';

const pb = new PocketBase('https://flytapfest.prothon.fr');

export async function AllArtiste() {
    const records = await pb.collection('Artiste').getFullList();
    return records;
}

export async function allScenes() {
    const scenes = await pb.collection('Scene').getFullList();
    return scenes;
}

//Une fonction qui retourne la liste de tous les artistes triés par date de représentation.

export async function getArtisteByDate() {
    try {
        let data = await pb.collection('Artiste').getFullList({
            filtre: 'date_representation',
        });
        return data;
    } catch (error) {
        console.log('Une erreur est survenue en lisant la liste des artistes', error);
        return [];
    }
}

// Une fonction qui retourne la liste de toutes les scènes triées par nom.

export async function allScenesSortedByName() {
    const records = await pb.collection('Scene').getFullList({ sort: 'nom' });
    return records;
}

// Une fonction qui retourne la liste de tous les artistes triés par ordre alphabétique.

export async function allArtisteByOrder() {
    const records = await pb.collection('Artiste').getFullList({
        sort: 'nom_artiste'
    });

    return records;
}

// Une fonction qui retourne les infos d'un artiste en donnant son id en paramètre.

export async function allEventsByArtisteId(id) {
    const record = await pb.collection('Artiste').getFullList({
        filter: `id = '${id}'`,
        expand: 'Artiste',
    });
    return record;
}

// Une fonction qui retourne les infos d'une scène en donnant son id en paramètre.

export async function allEventsBySceneId(id) {
    const record = await pb.collection('Scene').getFullList({
        filter: `id = '${id}'`,
        expand: 'Scene',
    });
    return record;
}

// Une fonction qui retourne tous les artistes se produisant sur une scène donnée par son id, triés par date.

export async function allArtisteBySceneId(id) {
    const events = await pb.collection('Artiste').getFullList({
        filter: `scene = '${id}'`,
        sort: 'date_representation',
        expand: 'Scene'
    });
    return events;
}

// Une fonction qui retourne tous les artistes se produisant sur une scène donnée par son nom, triés par date.

export async function allArtisteBySceneName(nom) {
    const events = await pb.collection('Artiste').getFullList({
        filter: `scene.nom = \"${nom}\"`,
        sort: 'date_representation',
        expand: 'scene'
    });
    return events;
}


// Une fonction qui permet d'ajouter ou modifier les informations d'un artiste ou d'une scène.

export async function saveData(artisteId, sceneId, newArtiste, newScene) {
    if (artisteId && sceneId) {
        await pb.collection('Artiste').update(artisteId, newArtiste);
        await pb.collection('Scene').update(sceneId, newScene);
    } else if (!artisteId && !sceneId) {
        await pb.collection('Artiste').create(newArtiste);
        await pb.collection('Scene').create(newScene);
    }
}


export function getFileURL(record, field, thumb) {
    return field ? pb.files.getURL(record, field, { thumb }) : null;
}

const options = {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: false,
    timeZone: "Europe/Paris",
};

const formatter = new Intl.DateTimeFormat("fr-FR", options);

export function formatDate(dateString) {
    const date = new Date(dateString);

    const formattedDate = formatter.format(date);

    return formattedDate;
}



