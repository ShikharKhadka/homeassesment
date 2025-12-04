import { redirect } from "next/navigation";
import CButton from "./component/button/button";
import CTable from "./component/table/table";
export type PersonI = {
  id: number;
  description: string;
  amount: number,
  category: string;
  type: string;
  date: string;
}
export default function Home() {
  redirect('/transaction-table');
}
