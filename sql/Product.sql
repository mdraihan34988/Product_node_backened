USE [product_management]
GO
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Product](
	[ProductID] [int] IDENTITY(1,1) NOT NULL,
	[ProductName] [varchar] (50)NULL,
    [ProductPrice] [decimal] NULL,
    [ProductQuantity] [int] NULL,
    [ProductDateTime] [datetime] NULL


) ON [PRIMARY]
GO
