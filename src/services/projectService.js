import http from "./httpService"


export function getOwnerProjectApi() {
  return http.get("/project/owner-project").then(({ data }) => data.data);
}
