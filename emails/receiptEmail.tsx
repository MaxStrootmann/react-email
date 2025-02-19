import {
  Body,
  Column,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";
import * as React from "react";

const ReceiptEmail = () => {
  const receipt = {
    customerName: "Max Strootmann",
    customerEmail: "strootmann95@gmail.com",
    customerAddress: {
      city: "Schagen",
      country: "NL",
      line1: "Vlierstraat",
      line2: "6",
      postal_code: "1741 VK",
      state: null,
    },
    transactionDetails: [
      {
        id: "li_1ONzHABTrHWnWUF3BsIdp7PH",
        object: "item",
        amount_discount: 0,
        amount_subtotal: 5200,
        amount_tax: 0,
        amount_total: 5200,
        currency: "eur",
        description: "Volumizing Dry Shampoo",
        price: [Object],
        quantity: 2,
      },
      {
        id: "li_1ONzHABTrHWnWUF30k3F5F8n",
        object: "item",
        amount_discount: 0,
        amount_subtotal: 600,
        amount_tax: 0,
        amount_total: 600,
        currency: "eur",
        description: "Verzendkosten (gratis vanaf €75)",
        price: [Object],
        quantity: 1,
      },
    ],
    receiptNumber: "4242-4242",
    amount: 5800,
    date: "04-02-2024 02:04:42",
  };

  return (
    <Html>
      <Head />
      <Preview>Je hebt een bestelling!</Preview>
      <Tailwind
        config={{
          theme: {
            extend: {
              fontFamily: {
                sans: [
                  "Seravek",
                  "Gill Sans Nova",
                  "Ubuntu",
                  "Calibri",
                  "DejaVu Sans",
                  "source-sans-pro",
                  "sans-serif",
                ],
                display: ["Charter", "Bitstream Charter", "Sitka Text", "Cambria", "serif"],
                serif: ["Charter", "Bitstream Charter", "Sitka Text", "Cambria", "serif"],
              },
              colors: {
                transparent: "transparent",
                current: "currentColor",
                white: "#ffffff",
                black: "#000000",
                "grey-300": "#F5F2F0",
                "grey-500": "#47433D",
                "bg-300": "#fff9f2",
                "bg-500": "#faeede",
                "bg-800": "#fbe8d4",
                "accent-500": "#C0975A",
                natulique: "#503421",
                "bubble-gum": "#ff77e9",
                bermuda: "#78dcca",
              },
            },
          },
        }}
      >
        <Body className='bg-bg-300 font-sans'>
          <Container className='m-auto'>
            <Section className='text-center'>
              <Section className='m-auto py-4 w-20'>
                <Img
                  src='https://drive.google.com/uc?export=view&id=1bV9a7kTZJykl8Ib-14mBGxAqB8NSZQZ4'
                  width='200'
                  height='100%'
                  alt='Haar Atelier Logo'
                />
              </Section>
              <Heading as='h1' className='text-2xl font-display'>
                Bestelling van Haar Atelier Alkmaar
              </Heading>
              <Heading as='h2' className='text-base font-light'>
                Ontvangstbewijs nummer: {receipt.receiptNumber}
              </Heading>
              <Section>
                <Row>
                  <Column className='text-left max-w-[300px] inline-block align-top'>
                    <Heading as='h2' className='text-base my-0 text-slate-500'>
                      Verzendadres:
                    </Heading>
                    <Text className='my-0'>
                      {receipt.customerAddress.line1 + " " + receipt.customerAddress.line2}
                      <br />
                      {receipt.customerAddress.postal_code}
                      <br />
                      {receipt.customerAddress.city}
                    </Text>
                    <Heading as='h2' className='text-base my-0 text-slate-500'>
                      Betaald bedrag:
                    </Heading>
                    <Text className='my-0'>€{(receipt.amount / 100).toFixed(2).replace(".", ",")}</Text>
                  </Column>
                  <Column className='text-left max-w-[300px] inline-block align-top'>
                    <Heading as='h2' className='text-base my-0 text-slate-500'>
                      Naam:
                    </Heading>
                    <Text className='my-0'>{receipt.customerName}</Text>
                    <Heading as='h2' className='text-base my-0 text-slate-500'>
                      Email:
                    </Heading>
                    <Text className='my-0'>{receipt.customerEmail}</Text>
                    <Heading as='h2' className='text-base my-0 text-slate-500'>
                      Datum van betaling:
                    </Heading>
                    <Text className='my-0'>{receipt.date}</Text>
                  </Column>
                </Row>
              </Section>
              <Section className='text-left'>
                <Text></Text>
                {receipt.transactionDetails.map((item: any) => (
                  <Text key={item.id}>
                    {item.name !== "Verzendkosten (gratis vanaf €75)"
                      ? `${item.description}, Aantal: ${item.quantity}, Prijs: €
                  ${item.amount_total / 100}`
                      : `Verzendkosten: €${item.amount_total / 100},-`}
                  </Text>
                ))}
              </Section>
              <Text></Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ReceiptEmail;
