import { useState, useEffect } from 'react';
const IMAGES = [
  "https://icongr.am/devicon/angularjs-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/c-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/csharp-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/css3-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/docker-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/django-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/gitlab-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/javascript-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/python-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/react-original.svg?size=128&color=currentColor"
].flatMap( img => [`a|`+img, `b|`+img]).sort( () => Math.random( ) - 0.5)

export const MemoTest = () => {

  const [guessed, setGuessed] = useState<String[]>([]);
  const [selected, setSelected] = useState<String[]>([]);

  useEffect(() => {    
    if(selected.length == 2){
      if(selected[0].split("|")[1] === selected[1].split("|")[1]){
        setGuessed( guessed => guessed.concat(selected));
      }
      setTimeout(() => setSelected([]), 1000);
    }
  }, [selected])
  
  useEffect(() => {
    if ( guessed.length === IMAGES.length) {
      alert("You win!");
       location.reload();
    }
  }, [guessed])
  

  return (
    <ul 
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(128px, 1fr))',
      gap: 24}}>
      {
        IMAGES.map( (image) => {
        const [,url] = image.split('|');

        return (
          <li style={{cursor: 'pointer',padding: 12, border: '1px solid #666', borderRadius: 12}}
            key={image}
            onClick={ () => selected.length < 2 && setSelected((selected) => selected.concat(image)) }
          >
            {selected.includes(image) || guessed.includes(image) ?
            <img alt='icon' src={url}/>
            :
            <img alt='icon' src="https://icongr.am/clarity/search.svg?size=128&color=currentColor"/>}
          </li>
        )
       })
      }
    </ul>
  )
}
