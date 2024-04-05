import { rest } from "@/lib/request";
import * as t from "io-ts";

const NewGroup = t.type({
  name: t.string,
  admins: t.array(t.string),
  members: t.array(t.string),
  _id: t.string,
  createdAt: t.string,
  __v: t.number,
});
export const GroupsResponse = t.type({
  status: t.string,
  newGroup: NewGroup,
});

export type GroupInputs = {
  image: string;
  name: string;
};

export const createGroup = ({ image, name }: GroupInputs) =>
  rest
    .post("/group/create", {
      image,
      name,
    })
    .decode(GroupsResponse);
