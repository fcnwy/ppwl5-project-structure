/* =========================
   MODEL (Issue: Langsung di index)
   Tugas:
    1. Pindahkan ke file khusus (user.model), dalam folder yang sesuai #
    2. gunakan export class ... #
    3. Property id jadikan opsional #
========================= */
// tambahin import dari user.type
import type { User } from "../types/user.type";

export class UserModel implements User {
  id: number;
  name: string;
  role: string;

  constructor(data: User) {
    this.id = data.id ?? 0; //jadiin id nya opsional
    this.name = data.name;
    this.role = data.role;
  }

  get displayName() {
    return `${this.name} (${this.role})`;
  }
}