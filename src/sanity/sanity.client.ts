import {createClient, type ClientConfig} from 'next-sanity'

const sanityClient:ClientConfig = {
    projectId:  "ysdjtgcx",
    dataset:  "production",
    useCdn: false,
    apiVersion: '2025-01-18',
    token:"skSz9kl1ipbX78hzQ4IfFRN6f4KYBEF0jmbFdQuUxdd5rzTvVm2c4WheuKSSlS4KTQXYbCHTupVrv2bSMauaiKWwKO9hF9mGfrsxXCanBFZo9wKUl5i7sR8MHHdz2FcvQD5Myg1bw21D97xD1kD8Y4u1LLZ0yhgwTYOF9sPorSFXKLVrp0i6"
}

export default createClient(sanityClient);