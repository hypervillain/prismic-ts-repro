import React, { useEffect, useState } from 'react';
import * as Prismic from 'prismic-reactjs';

import { client } from "./prismic-configuration";

console.log({ Prismic })

// const myCustomLink = (type, element, content, children, index) => (
//   <a href={"/hello"} key={`custom-link-${index + 1}`}>
//     {content}
//   </a>
// );

// const MyEmComponent = (props) => {
//   console.log('MyEMComp', props)
//   return <em {...{ ...props, style: { color: 'red' } }} />
// }


// const MyEmbed = (props) => {
//   console.log('MyEmbed', props)
//   return <p>My Embed</p>
// }

const App = () => {
  const [result, setRes] = useState(null)
  useEffect(() => {
    const fetchData = async () => {
      console.log({ client })
      const result: Prismic.PrismicDocument = await client.getSingle("home", {});
      console.log('query made')
      if (result) {
        console.log({ result })
        setRes(result)
      }
      console.log('!res?')
    };
    fetchData();
  }, []);

  return (<div>
    <Prismic.RichText
      elements={{
        // [Elements.heading1]: Title,
        // [Elements.em]: MyEmComponent,
        // [Elements.image]: Image,
      }}
      render={result ? result.data.text : []}
    />
  </div>)
}

export default App;