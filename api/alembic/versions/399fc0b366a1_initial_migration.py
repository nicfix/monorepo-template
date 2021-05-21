"""Initial migration

Revision ID: 399fc0b366a1
Revises: 
Create Date: 2021-05-21 09:40:12.024469

"""
import sqlalchemy as sa
from alembic import op

# revision identifiers, used by Alembic.
import pet_store

revision = '399fc0b366a1'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table(
        'pets',
        sa.Column('id', pet_store.adapters.sql_alchemy.BinaryUUID.BinaryUUID(length=16), nullable=False),
        sa.Column('name', sa.String(length=255), nullable=True),
        sa.Column('age', sa.Integer(), nullable=False),
        sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('pets')
    # ### end Alembic commands ###
