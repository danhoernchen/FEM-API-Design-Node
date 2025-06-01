import prisma from "../utils/db";

export const getUpdates = async (req, res) => {
  const products = await prisma.product.findMany({
    where: {
      belongsToId: req.user.id,
    },
    include: {
      updates: true,
    },
  });
  res.json({ data: products!.map((product) => product.updates) });
};

export const getUpdate = async (req, res) => {
  const product = await prisma.product.findUnique({
    where: {
      id_belongsToId: {
        id: req.body.productId,
        belongsToId: req.user.id,
      },
    },
  });
  if (!product) {
    res.json({ data: "not your update" });
  }
  const update = await prisma.update.findFirst({
    where: {
      id: req.params.id,
    },
  });
  res.json({ data: update });
};

export const createUpdate = async (req, res) => {
  const product = await prisma.product.findUnique({
    where: {
      id_belongsToId: {
        id: req.body.productId,
        belongsToId: req.user.id,
      },
    },
  });

  if (!product) {
    req.json({ message: "not your product" });
  }
  const update = await prisma.update.create({
    data: req.body,
  });
  res.json({ data: update });
};

export const updateUpdate = async (req, res) => {
  const product = await prisma.product.findUnique({
    where: {
      id_belongsToId: {
        id: req.body.productId,
        belongsToId: req.user.id,
      },
    },
  });

  if (!product) {
    res.json({ message: "not your product" });
  }
  const updated = await prisma.update.update({
    where: {
      id: req.params.id,
    },
    data: {
      body: req.body.body,
      title: req.body.title,
      status: req.body.status,
      version: req.body.version,
    },
  });
  res.json({ data: updated });
};

export const deleteUpdate = async (req, res) => {
  const product = await prisma.product.findUnique({
    where: {
      id_belongsToId: {
        id: req.body.productId,
        belongsToId: req.user.id,
      },
    },
  });

  if (!product) {
    res.json({ message: "not your product" });
  }
  const deleted = await prisma.update.delete({
    where: {
      id: req.params.id,
    },
  });
  res.json({ data: deleted });
};
