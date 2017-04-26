/**
 * Created by johny on 25/04/2017.
 */
export interface Customer {
  name: string;
  city: string;
  address?: string;
  contactPerson?: string;
  email?: string;
  phone?: string;
  comment?: string;
  $key?: string;
}
