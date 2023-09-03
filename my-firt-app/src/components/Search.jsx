import { useState } from 'react';

export default function Search({ videos }) {

    const [query, setQuery] = useState('');

    const filteredvideos = videos.filter(p => 
    p.name.includes(query)
    );

    return (
    <>
        <input className='g-[#50d71e] w-full h-[30px]'
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)} 
        />

     // show resoults filteredvideos
<table>

<tbody>

    {filteredvideos.map(video => (
    <tr key={video.id}>
        <td>{video.name}</td> 
    </tr>
    ))}

</tbody>

</table>

    </>
    )

}