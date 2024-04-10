import { rest } from "@/lib/request";
import * as t from "io-ts";

export const group = t.type({
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

interface addAdminProps {
  groupId: string;
  adminId: string;
}

export const addAdmin = ({ groupId, adminId }: addAdminProps) =>
  rest.post(`/group/${groupId}/add-admin/${adminId}`).decode(DeleteGroup);

export const getGroup = () => rest.get(`/group`).decode(GroupsResponse);

export const deleteGroup = (id: string) =>
  rest.delete(`/group/${id}/remove`).decode(DeleteGroup);
