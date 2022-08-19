import {
  BaseEntity, 
  PrimaryGeneratedColumn,
  Column, 
  OneToOne,
  JoinColumn, 
  ManyToOne,
  ManyToMany,
  Entity
} from "typeorm"
import { OtherDomain } from "./OtherDomain"
import { EnumName } from "../enum/EnumName"

@Entity('domain_name')
export class DomainName extends BaseEntity {

  @PrimaryGeneratedColumn({name:"id_domain_name"})
  id: number

  @Column({name:"column_name"/* column_length *//* column_required *//* column_enum */})
  attributeName: string

  @OneToOne(() => TypeDomain)
  @JoinColumn()
  attributeName: OtherDomain

  @OneToMany(() => TypeDomain, (typeDomain) => typeDomain.domain)
  attributeName: OtherDomain[]

  @ManyToOne(() => TypeDomain, (typeDomain) => typeDomain.domains)
  attributeName: OtherDomain

  @ManyToMany(() => TypeDomain, typeDomain => typeDomain.domains)
  attributeName: OtherDomain[]

}