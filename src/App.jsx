import Component from "./Component";

function App() {
	return (
		<>
            <div className="w-full h-auto px-6 py-6">
                <h1 className="text-4xl font-black">Weave<span className="text-brand">Bay</span></h1>
                <h1>Component template</h1>
            </div>
            <div className="w-full h-[calc(100vh-112px)] p-8 pt-0">
                <div className="bg-neutral-100 w-full h-full rounded-xl flex items-center justify-center">
                <Component />
                </div>
                
            </div>
			
		</>
	);
}

export default App;
