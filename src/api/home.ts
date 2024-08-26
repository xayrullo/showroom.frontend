import axios from "../plugins/axios";
import type { IBanner } from "@/types/home";

import { banners } from "@/data/home";

export default class HomeApi {
  getBanners(query?: any): Promise<IBanner[]> {
    return new Promise((resolve, reject) => {
      resolve(banners);
      return;
    });
    // return axios.get("/brands", { params: query }).then((res) => {
    //   return res.data.data;
    // });
  }
  //   create(payload: IBrandPost) {
  //     return axios.post("/brands", { data: payload }).then((res) => {
  //       return res.data;
  //     });
  //   }

  //   update(payload: IBrandPost) {
  //     return axios
  //       .put(`/brands/${payload.id}`, {
  //         data: payload,
  //       })
  //       .then((res) => {
  //         return res.data;
  //       });
  //   }

  //   delete(payload: IBrandPost) {
  //     return axios.delete(`/brands/${payload.id}`).then((res) => {
  //       return res.data;
  //     });
  //   }
}
