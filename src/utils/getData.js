import { data } from "../data/data";

// simple function to get appropriate data from 'data' file;
export default function getData (name) {
   for (const planet of data) {
      if(planet.name.toLowerCase() === name){
         return planet;
      }
   }
}
