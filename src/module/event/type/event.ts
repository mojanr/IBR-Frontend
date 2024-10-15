export enum EventType {
  NORMAL = 0,
  URGENT = 1
}

export enum EventStatus {
  PENGAJUAN = 0,
  APPROVE = 1,
  REJECT = -1,
  START = 2,
  END = 3
}

export type ContactPerson = {
  id: number
  id_t_event: number
  nama: string
  telepon: string
  createdby: number
  createdon: string
}

export type Participant = {
  id: number
  id_t_event: number
  user: number
  id_m_petugas: number
  nama_tugas: string
  createdby: number
  createdon: string
}

export type Region = {
  id: number
  id_t_event: number
  id_region: number
  kode_region: string
  region: string
  createdby: number
  createdon: string
}

export type Tembusan = {
  id: number
  id_t_event: number
  nama: string
  email: string
  createdby: number
  createdon: string
}

export type Event = {
  id: number
  nomor_event: string
  nama_event: string
  deskripsi: string
  tanggal_mulai: string
  tanggal_selesai: string
  tipe: EventType | number
  nama_pengaju: number
  user_approval: number
  tanggal_approval: string
  status: EventStatus | number
  keterangan: string
  perihal: string
  email_sent_count: number
  email_sent_date: string
  contact_person: ContactPerson[]
  participant: Participant[]
  region: Region[]
  tembusan: Tembusan[]
  tipe_text: string
  status_text: string
  createdby: number
  createdon: string
  modifiedby: number
  modifiedon: string
  deletedby: number
  deletedon: string
}