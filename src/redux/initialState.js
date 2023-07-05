const initialState = {

    posts: [
        {
            id: '1',
            title: 'Article I',
            shortDescription: 'Short description of the article...',
            content: 'Main content of the article',
            publishedDate: new Date('2022-05-29'),
            author: 'Cim Jarrey',
            categoryId: '1',
        },
        {
            id: '2',
            title: 'Article II',
            shortDescription: 'Short description of the article...',
            content: 'Main content of the article',
            publishedDate: new Date('2022-05-29'),
            author: 'Forgan Mreeman',
            categoryId: '2',
        },
        {
            id: '3',
            title: 'Article III',
            shortDescription: 'Short description of the article...',
            content: 'Main content of the article',
            publishedDate: new Date('2022-05-29'),
            author: 'Farrison Hord',
            categoryId: '3',
        },
        {
            id: '4',
            title: 'Article IV',
            shortDescription: 'Short description of the article...',
            content: 'Main content of the article',
            publishedDate: new Date('2022-05-29'),
            author: 'Deonardo LiCaprio',
            categoryId: '1',
        },
    ],

    categories: [
        {
            id: '1',
            name: 'News'
        },
        {
            id: '2',
            name: 'Movies'
        },
        {
            id: '3',
            name: 'Sport'
        }
    ]
};

export default initialState;