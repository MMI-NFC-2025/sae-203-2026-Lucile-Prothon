import { Allevents, getArtisteByDate, allScenesSortedByName, allArtisteByOrder, allEventsByArtisteId, allEventsBySceneId, allArtisteBySceneId, allArtisteBySceneName, saveData } from '../backend/backend.mjs';

/*try {
    const records = await Allevents();
    console.table(records);
} catch (e) {
    console.error(e);
}*/

/*try {
    const records = await getArtisteByDate();
    console.table(records);
} catch (e) {
    console.error(e);
}*/


/*try {
    const records = await allScenesSortedByName('Scène Principale');
    console.table(records);
} catch (e) {
    console.error(e);
}*/

/*try {
    const records = await allArtisteByOrder();
    console.table(records);
} catch (e) {
    console.error(e);
}*/

/*try {
    const records = await allEventsByArtisteId('72gdbf3go57bds1');
    console.table(records);
} catch (e) {
    console.error(e);
}*/

/*try {
    const records = await allEventsBySceneId('ytc10ylomb4z75i');
    console.table(records);
} catch (e) {
    console.error(e);
}*/

/*try {
    const records = await allArtisteBySceneId('ax08dtxwmjqg80s');
    console.table(records);
} catch (e) {
    console.error(e);
}*/

/*try {
    const records = await allArtisteBySceneName('Scène principale');
    console.table(records);
} catch (e) {
    console.error(e);
}*/

/*try {
    const newArtiste = { nom_artiste: 'Artiste Test', description: 'Test', date_representation: '2026-06-07', scene: 'ytc10ylomb4z75i', genre_musical : 'rock'};
    const newScene = { nom: 'Scène Test', description: 'Test', capacite: '7000', lieu: 'Parc du Près-la-Rose, Montbéliard' };
    await saveData(null, null, newArtiste, newScene);
    console.log('Création réussie');
} catch (e) {
    console.error('Erreur lors de la création :', e);
}*/

// Test de mise à jour (remplace les IDs par des IDs réels existants)
try {
    const artisteId = 'hum30t2d66mydhl'; // ID d'artiste existant
    const sceneId = 'absqn8x9cmemp0j'; // ID de scène existant
    const updatedArtiste = { nom_artiste: 'Artiste Test 1.1' };
    const updatedScene = { nom: 'Scène Test 1.1' };
    await saveData(artisteId, sceneId, updatedArtiste, updatedScene);
    console.log('Mise à jour réussie');
} catch (e) {
    console.error('Erreur lors de la mise à jour :', e);
}
