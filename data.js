/* INFINITY TOOL DATABASE
   ----------------------
   This file holds your permanent data. 
   Updating index.html will NOT delete this.
*/

// 1. YOUR CATEGORIES
window.permanentCats = [
    { id: 'c1', name: 'Useful Tools' },
    { id: 'c2', name: 'Study Sites' },
    { id: 'c3', name: 'Photo Prompts' }
];

// 2. YOUR SITES
window.permanentPosts = [
    {
        id: 101,
        catId: 'c1',
        title: "NoteGPT",
        link: "https://notegpt.io",
        img: "https://ui-avatars.com/api/?name=NoteGPT&background=1e293b&color=fff",
        desc: "AI Summary tool for students."
    },
    // Copy and paste the block above to add more sites here...
];

// 3. YOUR ADMIN SETTINGS
window.permanentSettings = {
    headerTitle: "Welcome",
    headerSub: "Explore tools",
    aboutText: "Welcome to Infinity Tool. We provide the best resources."
};