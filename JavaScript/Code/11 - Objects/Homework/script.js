var library = [
    {
        title: 'Bill Gates',
        author: 'The Road Ahead',
        readingStatus: true,
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        readingStatus: true,
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        readingStatus: false,
    },
];

for (var i = 0; i < library.length; i++) {
    readingStatus = library[i].readingStatus;
    title = library[i].title;
    author = library[i].author;
    if (readingStatus == true) {
        console.log('Already read ' + title + ' by ' + author);
    } else {
        console.log('You still need to read ' + title + ' by ' + author);
    }
}
