import { useForm } from "react-hook-form"
import z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import * as S from "./styles"
import { cadastrar } from "../../store/redux/contatos-reducer"
import { useDispatch } from "react-redux"

const phoneRegex = /^\(\d{2}\)\s?\d{8,9}$/
const nameRegex = /^[a-zA-ZÀ-ÿ']+( [a-zA-ZÀ-ÿ']+)+$/

const createContactSchema = z.object({
  nomeCompleto: z
    .string()
    .regex(nameRegex, "Formato inválido")
    .nonempty("O nome é obrigatório")
    .transform((name) =>
      name
        .trim()
        .split(" ")
        .map((word) => word[0].toLocaleUpperCase().concat(word.substring(1)))
        .join(" ")
    ),
  email: z
    .string()
    .nonempty("O e-mail é obrigatorio")
    .email("Formato de e-mail inválido")
    .refine(
      (email) => email.endsWith("@gmail.com") || email.endsWith("@hotmail.com"),
      "O email precisa ser Gmail ou Hotmail"
    ),
  tel: z
    .string()
    .nonempty("O telefone é obrigatorio")
    .regex(phoneRegex, "Formato invalido")
})

type createContactData = z.infer<typeof createContactSchema>

const Formulario = () => {
  const [isLoading, setLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<createContactData>({
    resolver: zodResolver(createContactSchema)
  }) // Registar os campos

  const dispatch = useDispatch()

  function createContact(data: any) {
    dispatch(cadastrar(data))
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      reset()
      // Aqui você pode adicionar lógica para enviar o formulário para o servidor
    }, 2000)
  }

  return (
    <S.Container>
      <S.Form onSubmit={handleSubmit(createContact)}>
        <S.ContainerDiv>
          <S.ContainerDivChild>
            <S.LabelCadastro error={errors.nomeCompleto} htmlFor="nomeCompleto">
              Nome completo:
            </S.LabelCadastro>
            <S.InputCadastro
              id="nomeCompleto"
              type="text"
              placeholder="Digite o nome completo. EX: João Silva"
              {...register("nomeCompleto")}
              error={errors.nomeCompleto}
            />
            <S.SpanMessage error={errors.nomeCompleto}>
              {errors.nomeCompleto ? errors.nomeCompleto.message : "Ola"}
            </S.SpanMessage>
          </S.ContainerDivChild>

          <S.ContainerDivChild>
            <S.LabelCadastro error={errors.email} htmlFor="email">
              Email:
            </S.LabelCadastro>
            <S.InputCadastro
              type="email"
              placeholder="Digite o email."
              id="email"
              {...register("email")}
              error={errors.email}
            />
            <S.SpanMessage error={errors.email}>
              {errors.email ? errors.email.message : "Ola"}
            </S.SpanMessage>
          </S.ContainerDivChild>
        </S.ContainerDiv>

        <S.ContainerDiv>
          <S.ContainerDivChild>
            <S.LabelCadastro error={errors.tel} htmlFor="telefone">
              Telefone:
            </S.LabelCadastro>
            <S.InputCadastro
              type="tel"
              placeholder="Digite o telefone. EX:(99)999999999"
              id="telefone"
              {...register("tel")}
              error={errors.tel}
            />
            <S.SpanMessage error={errors.tel}>
              {errors.tel ? errors.tel.message : "Ola"}
            </S.SpanMessage>
          </S.ContainerDivChild>
        </S.ContainerDiv>
        <S.ContainerDiv>
          <S.ButtonCadastro type="submit">
            {!isLoading ? "Cadastrar" : "Carregando..."}
          </S.ButtonCadastro>
        </S.ContainerDiv>
      </S.Form>
    </S.Container>
  )
}
export default Formulario
// function cadastrarContato() {
//   // dispatch(
//   //   cadastrar({
//   //     id: 0,
//   //     nomeCompleto: "a",
//   //     email: novoEmail,
//   //     tel: novoTel
//   //   })
//   // )
// }
