import { useEffect } from 'react';
import useComponentsRender from '@stores/useComponentsRender';

function Home() {
  const { components, initializeComponents } = useComponentsRender();
  
  useEffect(() => {
    initializeComponents();
  }, []);
  useEffect(() => {
    console.log(components);
  }, [components]);
  return (
    <div>
      <h2>JS Challenges List ({components.length})</h2>
      <ul>
        {components.map((component) => (
          <li key={component.id}>
            <a href={`/challenges/${component.id}`}>
              {component.id}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home; 