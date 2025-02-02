// 'use client'

// import { useState } from 'react'
// import { Grid2X2, List, SlidersHorizontal, X } from 'lucide-react'
// import { Button } from "@/components/ui/button"
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select"
// import {
//   Sheet,
//   SheetContent,
//   SheetTrigger,
// } from "@/components/ui/sheet"

// export default function ShopFilter() {
//   const [isFilterOpen, setIsFilterOpen] = useState(false)
//   console.log(isFilterOpen)

//   return (
//     <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 mt-0 rounded-sm bg-[#F9F1E7]">
//       <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 w-full sm:w-auto mb-4 sm:mb-0">
//         <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
//           <SheetTrigger asChild>
//             <Button variant="ghost" className="flex items-center gap-2 text-base font-normal hover:bg-transparent hover:text-black/80 sm:hidden">
//               <SlidersHorizontal className="w-5 h-5" />
//               Filter
//             </Button>
//           </SheetTrigger>
//           <SheetContent side="left" className="w-[300px] sm:hidden">
//             <div className="flex justify-between items-center mb-6">
//               <h2 className="text-lg font-semibold">Filters</h2>
//               <Button variant="ghost" size="icon" onClick={() => setIsFilterOpen(false)}>
//                 <X className="w-5 h-5" />
//               </Button>
//             </div>
//           </SheetContent>
//         </Sheet>
//         <Button variant="ghost" className="hidden sm:flex items-center gap-2 text-base font-normal hover:bg-transparent hover:text-black/80">
//           <SlidersHorizontal className="w-5 h-5" />
//           Filter
//         </Button>
//         <div className="flex items-center gap-2 sm:border-l sm:border-gray-200 sm:pl-6">
//           <Button variant="ghost" size="icon" className="hover:bg-transparent hover:text-black/80">
//             <Grid2X2 className="w-5 h-5" />
//           </Button>
//           <Button variant="ghost" size="icon" className="hover:bg-transparent hover:text-black/80">
//             <List className="w-5 h-5" />
//           </Button>
//         </div>
//         <span className="text-sm text-gray-600 hidden sm:inline">
//           Showing 1-16 of 32 results
//         </span>
//       </div>
//       <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full sm:w-auto">
//         <div className="flex items-center gap-2 w-full sm:w-auto">
//           <span className="text-sm">Show</span>
//           <Select defaultValue="16">
//             <SelectTrigger className="w-full sm:w-[70px] border-0 bg-[#fff] focus:ring-0">
//               <SelectValue />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="16">16</SelectItem>
//               <SelectItem value="32">32</SelectItem>
//               <SelectItem value="48">48</SelectItem>
//             </SelectContent>
//           </Select>
//         </div>
//         <div className="flex items-center gap-2 w-full sm:w-auto">
//           <span className="text-sm">Short by</span>
//           <Select defaultValue="default">
//             <SelectTrigger className="w-full sm:w-[100px] border-0 bg-white focus:ring-0">
//               <SelectValue />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="default">Default</SelectItem>
//               <SelectItem value="price-asc">Price: Low to High</SelectItem>
//               <SelectItem value="price-desc">Price: High to Low</SelectItem>
//               <SelectItem value="newest">Newest</SelectItem>
//             </SelectContent>
//           </Select>
//         </div>
//       </div>
//     </div>
//   )
// }

