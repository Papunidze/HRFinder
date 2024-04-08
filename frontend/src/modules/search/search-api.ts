import { rest } from "@/lib/request";
import * as t from "io-ts";

export type SearchInput = { member: string };
export type accessChatProps = { _id: string };

const User = t.type({
  _id: t.string,
  name: t.string,
  avatar: t.string,
  email: t.string,
});

export const TSearch = t.type({
  result: t.array(User),
});

export const search = ({ member }: SearchInput) =>
  rest.get(`/user/search?member=${member}`).decode(TSearch);
