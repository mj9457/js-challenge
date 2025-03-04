import { create } from 'zustand';

// challenges 디렉토리의 모든 컴포넌트 파일을 동적으로 불러옵니다
const challengeComponents = import.meta.glob('@pages/Challenges/*/index.jsx');

const useComponentsRender = create((set) => ({
  components: [],
  
  // 컴포넌트 목록 초기화
  initializeComponents: async () => {
    const componentList = [];
    
    // 각 컴포넌트 파일에 대해 처리
    for (const path in challengeComponents) {
        console.log(path);
      const folderName = path.split('/').slice(-2, -1)[0];
      const fileName = path.split('/').pop().replace('.jsx', '');
      
      componentList.push({
        id: folderName,
        path: path,
        title: fileName.replace(/([A-Z])/g, ' $1').trim(), // CamelCase를 공백으로 분리
        component: (await challengeComponents[path]()).default
      });
    }
    
    set({ components: componentList });
  }
}));

export default useComponentsRender;
