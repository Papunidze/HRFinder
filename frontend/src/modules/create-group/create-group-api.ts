import { rest } from "@/lib/request";
import * as t from "io-ts";

const Group = t.type({
  name: t.string,
  admins: t.array(t.string),
  members: t.array(t.string),
  _id: t.string,
  createdAt: t.string,
  __v: t.number,
});
export const GroupsResponse = t.type({
  status: t.string,
  group: Group,
});

export type GroupInputs = {
  image: string;
  name: string;
  id?: string;
};
export const EditGroupsResponse = t.type({
  status: t.string,
  group: Group,
});

export const createGroup = ({ image, name }: GroupInputs) =>
  rest
    .post("/group/create", {
      image,
      name,
    })
    .decode(GroupsResponse);

export const editGroup = ({ image, name, id }: GroupInputs) =>
  rest
    .put(`/group/${id}/edit`, {
      image,
      name,
    })
    .decode(EditGroupsResponse);
