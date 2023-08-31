import { Box, Stack, Divider, BoxProps } from "@chakra-ui/react";
import { Text } from "@ui/Typography/Text";
import { Heading } from "@ui/Typography/Heading";

import React from "react";

type Props = {
  title: string | undefined;
  description?: string | undefined;
  bottomContent?: React.ReactNode;
  size?: "sm" | "lg";
} & BoxProps;

export const SectionHeader = ({
  size = "sm",
  title,
  description,
  bottomContent,
  ...rest
}: Props) => {
  return (
    <Box
      as="section"
      maxW="contentMaxW.md"
      borderBottom="1px solid"
      borderColor="border.divider"
      pb={{
        base: "page.block-gap.base",
        md: "page.block-gap.md",
        lg: "page.block-gap.lg",
      }}
      {...rest}
    >
      <Stack spacing="40px">
        <Box>
          <Heading
            variant="h1"
            as="h2"
            // fontSize={{ base: "32px", md: "48px" }}
            // lineHeight={{ base: "1.5em", md: "1.5em" }}
            fontWeight="extrabold"
            color="heading-navy-fg"
          >
            {title}
          </Heading>
          {description && (
            <Text
              color="content.accent.value"
              variant="body"
              pt={size === "sm" ? "xs" : "lg"}
            >
              {description}
            </Text>
          )}
          {bottomContent}
        </Box>
      </Stack>
    </Box>
  );
};
