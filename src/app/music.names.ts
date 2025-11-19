
export interface SelectedMusicGroup{
    id: string
    name: string
    avatar: string
}
export const MUSIC_NAMES:SelectedMusicGroup[] = [
  {
    
    id: 'u1',
    name: 'Spiritbox',
    avatar: '/public/MusicGroups/Spiritbox.jpg',
  },
  {
    
    id: 'u2',
    name: 'FFDP',
    avatar: '/public/MusicGroups/FFDP.jpg',
  },
  {
    
    id: 'u3',
    name: 'Istasha',
    avatar: '/public/MusicGroups/Istasha.jpg',
  },
  {
    
    id: 'u4',
    name: 'Scarlxrd',
    avatar: '/public/MusicGroups/Scarlxrd.jpg',
  },
  {
    
    id: 'u5',
    name: 'Mugxtsu',
    avatar: '/public/MusicGroups/Mugxtsu.jpg',
  },
  {
    
    id: 'u6',
    name: 'In flames',
    avatar: '/public/MusicGroups/Inflames.jpg',
  },
];

 export interface HeaderQuote{
  id:string
  groupId:string
  song:string
  quote:string
}

export const HEADER_QUOTES:HeaderQuote[] = [ 
  {
    id:'h1',
    groupId: 'u1',
    song:'Blessed Be',
    quote:'And if I lose myself, blessed be...'
  },
  {
    id:'h2',
    groupId: 'u2',
    song:'Living The Dream',
    quote:'They say the road to hell is paved with good intentions'
  },
    {
    id:'h3',
    groupId: 'u3',
    song:'The Heat From The Sun Is No',
    quote:'Swing wide, go side, never age, soul side'
  },
    {
    id:'h4',
    groupId: 'u4',
    song:'HELL IS XN EARTH',
    quote:'Death is the enemy'
  },
    {
    id:'h5',
    groupId: 'u5',
    song:'Under the Pillow',
    quote:'Bring me your life and I will find you solace'
  },
    {
    id:'h6',
    groupId: 'u6',
    song:'My Sweet Shadow',
    quote:'Fueled, these new shores burn'
  },
]
