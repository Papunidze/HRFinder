import { rest } from "@/lib/request";
import * as t from "io-ts";

export const User = t.type({
  _id: t.string,
  name: t.string,
  avatar: t.string,
  email: t.string,
});

export const AdminResponse = t.type({
  status: t.literal("success"),
  data: t.type({
    admins: t.array(User),
  }),
});

const Member = t.type({
  _id: t.string,
  name: t.string,
  avatar: t.string,
  email: t.string,
  about: t.string,
  education: t.string,
  availability: t.string,
  location: t.string,
  birthday: t.string,
  mobile: t.string,
  skills: t.array(t.string),
  experience: t.string,
  role: t.string,
});

export const MembersResponse = t.type({
  status: t.literal("success"),
  members: t.array(Member),
});

export const getAdminsById = ({ id }: { id: string }) =>
  rest.get(`/group/${id}`).decode(AdminResponse);

export const getMembersById = ({ id }: { id: string }) =>
  rest.get(`/group/${id}/members`).decode(MembersResponse);
