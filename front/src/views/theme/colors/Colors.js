import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CFormSelect,
  CFormLabel,
  CFormRange,
  CTableBody,
  CFormTextarea,
  CTable,
  CTableHead,
  CTableRow,
  CTableDataCell,
  CTableHeaderCell,
  CRow,
} from '@coreui/react'
import { DocsCallout, DocsExample } from 'src/components'

const Colors = () => {
  return (
    <>
      <CRow>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>Registro de usuario</strong>
            </CCardHeader>
            <CCardBody>
              <CForm>
                <CRow>
                  <CCol lg={6}>
                    <CFormLabel htmlFor="exampleFormControlInput1">Tipo de usuario</CFormLabel>
                    <CFormSelect aria-label="Default select example">
                      <option>--Seleccione--</option>
                      <option value="1">Restaurante</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </CFormSelect>
                  </CCol>
                  <CCol lg={6}>
                    <CFormLabel htmlFor="exampleFormControlInput1">Username</CFormLabel>
                    <CFormInput type="text" id="exampleFormControlInput1" />
                  </CCol>
                </CRow>

                <CRow>
                  <CCol lg={6}>
                    <CFormLabel htmlFor="exampleFormControlInput1">Password</CFormLabel>
                    <CFormInput type="password" id="exampleFormControlInput1" />
                  </CCol>
                  <CCol lg={6}>
                    <CFormLabel htmlFor="exampleFormControlInput1"></CFormLabel>
                    <br></br>
                    <CButton type="text" id="exampleFormControlInput1">
                      Guardar
                    </CButton>
                  </CCol>
                </CRow>
              </CForm>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <CRow>
        <CTable>
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell scope="col">Tipo usuario</CTableHeaderCell>
              <CTableHeaderCell scope="col">Username</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            <CTableRow>
              <CTableHeaderCell scope="row">Admin</CTableHeaderCell>
              <CTableDataCell>natalia</CTableDataCell>
            </CTableRow>
            <CTableRow color="info">
              <CTableHeaderCell scope="row">Estandar</CTableHeaderCell>
              <CTableDataCell>niki</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableHeaderCell scope="row">Admin</CTableHeaderCell>
              <CTableDataCell>team43</CTableDataCell>
            </CTableRow>
          </CTableBody>
        </CTable>
      </CRow>
    </>
  )
}

export default Colors
