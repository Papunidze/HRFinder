import { rest } from "@/lib/request";
import * as t from "io-ts";

const group = t.type({
  _id: t.string,
  name: t.string,
  image: t.string,
  admins: t.array(t.string),
  members: t.array(t.string),
  createdAt: t.string,
  __v: t.number,
});

export const GroupsResponse = t.type({
  status: t.literal("success"),
  data: t.type({
    groups: t.array(group),
  }),
});

export const DeleteGroup = t.type({
  status: t.literal("success"),
  group: group,
});

export const getGroup = () => rest.get(`/group`).decode(GroupsResponse);

export const deleteGroup = (id: string) =>
  rest.delete(`/group/${id}/remove`).decode(DeleteGroup);
