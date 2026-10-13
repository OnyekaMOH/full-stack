import { BrowserRouter } from "react-router";
import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900">Navbar test page</h1>
        <p className="mt-2 text-gray-600">
          Resize the window, click the hamburger, and scroll down.
        </p>
        <div className="mt-6 h-[200vh] rounded-2xl bg-gray-100" />
      </main>
    </BrowserRouter>
  );
}

export default App;

// import Button from "./components/ui/Button";
// import { APP_NAME, CATEGORIES, NAV_LINKS } from "./lib/constants";

// function App() {
//   return (
//     <main className="min-h-screen bg-gray-50 p-4 sm:p-8">
//       <div className="mx-auto max-w-2xl space-y-6 rounded-2xl bg-white p-6 shadow-lg sm:p-8">
//         <h1 className="text-3xl font-bold text-indigo-600">{APP_NAME}</h1>

//         <p className="text-gray-600">
//           Links: {NAV_LINKS.map((link) => link.label).join(", ")}
//         </p>
//         <p className="text-gray-600">Categories: {CATEGORIES.join(", ")}</p>

//         <div className="flex flex-wrap gap-3">
//           <Button>Primary</Button>
//           <Button variant="secondary">Secondary</Button>
//           <Button variant="outline">Outline</Button>
//           <Button variant="ghost">Ghost</Button>
//           <Button disabled>Disabled</Button>
//         </div>

//         <div className="flex flex-wrap items-center gap-3">
//           <Button size="sm">Small</Button>
//           <Button size="md">Medium</Button>
//           <Button size="lg">Large</Button>
//         </div>
//       </div>
//     </main>
//   );
// }

// export default App;

// import Button from "./components/ui/Button";
// function App() {
//   return (
//     <main className="flex min-h-screen items-center justify-center bg-gray-50 p-4 sm:p-8">
//       <div className="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-lg">
//         <h1 className="text-3xl font-bold text-indigo-600">ShopEase</h1>
//         <p className="mt-2 text-gray-600">
//           Vite + React + TypeScript + Tailwind are working. 🎉
//         </p>
//         <main className="min-h-screen bg-gray-50 p-6">
//           <h1 className="mb-6 text-3xl font-bold text-gray-900">ShopEase</h1>

//           <div className="flex flex-wrap items-center gap-4">
//             <Button variant="primary">Add Product</Button>

//             <Button variant="secondary">View Products</Button>

//             <Button variant="outline">Cancel</Button>

//             <Button variant="ghost">Learn More</Button>

//             <Button size="sm">Small Button</Button>

//             <Button size="lg">Large Button</Button>

//             <Button disabled>Disabled Button</Button>
//           </div>
//         </main>
//       </div>
//     </main>
//   );
// }

// export default App;
